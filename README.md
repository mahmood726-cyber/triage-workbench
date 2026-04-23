<!-- sentinel:skip-file — hardcoded paths are fixture/registry/audit-narrative data for this repo's research workflow, not portable application configuration. Same pattern as push_all_repos.py and E156 workbook files. -->

# TriageWorkbench

TriageWorkbench is a new standalone project built from the bundled `ResearchConstellation` snapshot.

## Why this exists

Every later layer now depends on one upstream weakness: 83 portfolio rows still have no frozen lifecycle label.

TriageWorkbench addresses that directly by:

- reading the bundled portfolio snapshot
- extracting unresolved rows only
- applying deterministic status heuristics
- attaching a confidence tier and short rationale to each suggested label
- exposing the results in a static dashboard and E156 bundle

## Outputs

- `triage-recommendations.json` - full suggestion table for unresolved rows
- `data.json` and `data.js` - dashboard payloads
- `index.html` - static triage dashboard
- `e156-submission/` - paper, protocol, metadata, and reader page

## Rebuild

Run:

`python C:\Users\user\TriageWorkbench\scripts\build_triage_workbench.py`

For a custom source file:

`python C:\Users\user\TriageWorkbench\scripts\build_triage_workbench.py --source path\to\portfolio-data.json`

## Method note

This project is a rule-based decision-support layer, not an automated truth engine. It is intended to shrink the review queue and make the next human triage pass faster and more consistent.
