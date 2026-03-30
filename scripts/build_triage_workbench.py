from __future__ import annotations

import argparse
import json
import re
from collections import Counter, defaultdict
from datetime import datetime, timezone
from pathlib import Path


PROJECT_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_SOURCE = PROJECT_ROOT / "data-source" / "portfolio-data.snapshot.json"
DATA_JSON = PROJECT_ROOT / "data.json"
DATA_JS = PROJECT_ROOT / "data.js"
RECOMMENDATIONS_JSON = PROJECT_ROOT / "triage-recommendations.json"

STATUS_SIGNALS = {
    "review": [
        ("review clean", 6),
        ("review", 4),
        ("fixes done", 4),
        ("response", 3),
    ],
    "submission-ready": [
        ("manuscript", 5),
        ("paper", 4),
        ("journal", 4),
        ("target", 3),
        ("submission", 5),
        ("ready", 3),
        ("complete", 2),
        ("f1000", 4),
        ("lancet", 4),
        ("bmj", 4),
    ],
    "shipped": [
        ("github pages ready", 6),
        ("landing page", 5),
        ("website", 5),
        ("showcase", 4),
        ("dashboard", 4),
        ("browser", 3),
        ("tool cards", 4),
        ("site", 3),
        ("app", 2),
    ],
    "active": [
        ("tests", 4),
        ("v1.0", 3),
        ("v1.1", 3),
        ("v2.0", 3),
        ("module", 4),
        ("engine", 4),
        ("pipeline", 4),
        ("api", 4),
        ("analysis", 3),
        ("tracker", 3),
        ("forensics", 3),
        ("detection", 3),
        ("extractor", 3),
        ("dataset", 3),
        ("tool", 2),
        ("methods", 2),
        ("configs", 2),
    ],
    "paused": [
        ("paused", 6),
        ("backlog", 4),
        ("parked", 4),
    ],
    "archived": [
        ("archived", 6),
        ("legacy", 4),
        ("deprecated", 4),
    ],
    "submitted": [("submitted", 6)],
    "accepted": [("accepted", 6)],
    "published": [("published", 6)],
}

STATUS_LABELS = {
    "active": "Active",
    "submission-ready": "Submission ready",
    "submitted": "Submitted",
    "review": "Review",
    "accepted": "Accepted",
    "published": "Published",
    "shipped": "Shipped",
    "maintained": "Maintained",
    "paused": "Paused",
    "archived": "Archived",
    "needs-triage": "Needs triage",
}


def load_payload(source_path: Path) -> dict[str, object]:
    return json.loads(source_path.read_text(encoding="utf-8"))


def normalize(value: str) -> str:
    return re.sub(r"\s+", " ", value.lower()).strip()


def add_signal(scores: defaultdict[str, int], reasons: defaultdict[str, list[str]], status: str, weight: int, reason: str) -> None:
    scores[status] += weight
    reasons[status].append(reason)


def recommend_status(project: dict[str, object]) -> dict[str, object]:
    scores: defaultdict[str, int] = defaultdict(int)
    reasons: defaultdict[str, list[str]] = defaultdict(list)
    raw_text = " ".join(
        [
            project["name"],
            project["path"],
            project.get("detail", ""),
            project["row"].get("Status", ""),
            project["row"].get("Paper Status", ""),
            project["row"].get("Last Touch", ""),
        ]
    )
    text = normalize(raw_text)
    project_type = project["type"]
    path = project["path"]
    lower_name = project["name"].lower()

    for status, signals in STATUS_SIGNALS.items():
        for phrase, weight in signals:
            if phrase in text:
                add_signal(scores, reasons, status, weight, f"Matched '{phrase}'")

    if project_type == "HTML app":
        add_signal(scores, reasons, "shipped", 3, "HTML app prior")
        add_signal(scores, reasons, "active", 1, "HTML app maintenance prior")
    elif project_type == "Static site":
        add_signal(scores, reasons, "shipped", 4, "Static site prior")
    elif project_type in {"Model", "Python pipeline", "Python pipeline+HTML", "Pipeline+Dashboard"}:
        add_signal(scores, reasons, "active", 3, f"{project_type} prior")
    elif project_type == "Course material":
        add_signal(scores, reasons, "active", 1, "Course material prior")

    if path.startswith("C:\\HTML apps\\"):
        add_signal(scores, reasons, "shipped", 2, "HTML apps path prior")
    if path == "C:\\Projects\\":
        add_signal(scores, reasons, "needs-triage", 3, "Generic root path penalty")
    if "site" in lower_name or "website" in lower_name:
        add_signal(scores, reasons, "shipped", 3, "Site naming prior")
    if "living" in lower_name:
        add_signal(scores, reasons, "active", 2, "Living workflow prior")
    if "course" in lower_name:
        add_signal(scores, reasons, "active", 1, "Course naming prior")
    if "review clean" in text:
        add_signal(scores, reasons, "review", 10, "Review-clean override")

    ranked = sorted(scores.items(), key=lambda item: (-item[1], item[0]))
    if not ranked:
        return {
            "id": project["id"],
            "name": project["name"],
            "tier": project["tierShortName"],
            "tierName": project["tierName"],
            "type": project["type"],
            "path": project["path"],
            "recommendedStatus": "needs-triage",
            "recommendedStatusLabel": STATUS_LABELS["needs-triage"],
            "confidence": "low",
            "score": 0,
            "margin": 0,
            "rationale": ["No rule-based signal exceeded zero."],
            "sourceStatus": project["row"].get("Status", ""),
        }

    top_status, top_score = ranked[0]
    second_score = ranked[1][1] if len(ranked) > 1 else 0
    margin = top_score - second_score

    if top_status == "needs-triage" and top_score <= 3:
        confidence = "low"
    elif top_score >= 8 and margin >= 3:
        confidence = "high"
    elif top_score >= 4 and margin >= 1:
        confidence = "medium"
    else:
        confidence = "low"

    return {
        "id": project["id"],
        "name": project["name"],
        "tier": project["tierShortName"],
        "tierName": project["tierName"],
        "type": project["type"],
        "path": project["path"],
        "recommendedStatus": top_status,
        "recommendedStatusLabel": STATUS_LABELS[top_status],
        "confidence": confidence,
        "score": top_score,
        "margin": margin,
        "rationale": reasons[top_status][:4] or ["Path and type priors only."],
        "sourceStatus": project["row"].get("Status", ""),
    }


def build_payload(source: dict[str, object]) -> tuple[dict[str, object], dict[str, object]]:
    unresolved = [project for project in source["portfolio"] if not project["statusExplicit"]]
    recommendations = [recommend_status(project) for project in unresolved]

    by_status = Counter(item["recommendedStatus"] for item in recommendations)
    by_confidence = Counter(item["confidence"] for item in recommendations)
    by_tier = Counter(item["tierShortName"] for item in unresolved)
    recommended_non_triage = sum(1 for item in recommendations if item["recommendedStatus"] != "needs-triage")
    medium_or_high = sum(
        1
        for item in recommendations
        if item["recommendedStatus"] != "needs-triage" and item["confidence"] in {"medium", "high"}
    )
    high_only = sum(
        1
        for item in recommendations
        if item["recommendedStatus"] != "needs-triage" and item["confidence"] == "high"
    )

    recommendation_file = {
        "project": "TriageWorkbench",
        "generatedAt": datetime.now(timezone.utc).isoformat(timespec="seconds"),
        "overview": {
            "sourcePath": source["overview"]["sourcePath"],
            "trackedProjects": source["overview"]["trackedProjects"],
            "unresolvedProjects": len(unresolved),
            "recommendedNonTriage": recommended_non_triage,
            "recommendedNonTriagePercent": round((recommended_non_triage / len(unresolved)) * 100, 1) if unresolved else 0.0,
            "mediumOrHighCount": medium_or_high,
            "mediumOrHighPercent": round((medium_or_high / len(unresolved)) * 100, 1) if unresolved else 0.0,
            "highConfidenceCount": high_only,
            "highConfidencePercent": round((high_only / len(unresolved)) * 100, 1) if unresolved else 0.0,
        },
        "recommendations": recommendations,
    }

    dashboard_data = {
        "project": {
            "name": "TriageWorkbench",
            "version": "0.1.0",
            "generatedAt": recommendation_file["generatedAt"],
            "sourcePath": source["overview"]["sourcePath"],
            "designBasis": [
                "Rule-based lifecycle recommendation engine",
                "Confidence-tiered triage dashboard",
                "Static GitHub Pages delivery",
            ],
        },
        "metrics": recommendation_file["overview"],
        "statusBreakdown": [
            {
                "status": STATUS_LABELS[key],
                "key": key,
                "count": count,
            }
            for key, count in sorted(by_status.items(), key=lambda item: (-item[1], item[0]))
        ],
        "confidenceBreakdown": [
            {"confidence": key.title(), "count": count}
            for key, count in sorted(by_confidence.items(), key=lambda item: (-item[1], item[0]))
        ],
        "tierPressure": [
            {"tier": tier, "count": count}
            for tier, count in sorted(by_tier.items(), key=lambda item: (-item[1], item[0]))
        ],
        "highConfidenceExamples": [item for item in recommendations if item["confidence"] == "high"][:12],
        "reviewQueue": [item for item in recommendations if item["confidence"] == "low"][:14],
        "allRecommendations": recommendations[:24],
    }

    return recommendation_file, dashboard_data


def write_outputs(recommendation_file: dict[str, object], dashboard_data: dict[str, object]) -> None:
    RECOMMENDATIONS_JSON.write_text(json.dumps(recommendation_file, indent=2), encoding="utf-8")
    DATA_JSON.write_text(json.dumps(dashboard_data, indent=2), encoding="utf-8")
    DATA_JS.write_text("window.TRIAGE_WORKBENCH_DATA = " + json.dumps(dashboard_data, indent=2) + ";\n", encoding="utf-8")


def main() -> None:
    parser = argparse.ArgumentParser(description="Build TriageWorkbench artifacts.")
    parser.add_argument(
        "--source",
        help="Optional path to a portfolio-data.json file. Relative paths resolve from the repository root.",
    )
    args = parser.parse_args()

    source_path = Path(args.source) if args.source else DEFAULT_SOURCE
    if not source_path.is_absolute():
        source_path = PROJECT_ROOT / source_path
    if not source_path.exists():
        raise SystemExit(f"Source data not found: {source_path}")

    source = load_payload(source_path)
    recommendation_file, dashboard_data = build_payload(source)
    write_outputs(recommendation_file, dashboard_data)

    metrics = dashboard_data["metrics"]
    print(
        "Built TriageWorkbench "
        f"({metrics['unresolvedProjects']} unresolved rows, "
        f"{metrics['recommendedNonTriage']} rule-based recommendations, "
        f"{metrics['mediumOrHighPercent']}% medium/high confidence)."
    )


if __name__ == "__main__":
    main()
