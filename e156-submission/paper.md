Mahmood Ahmad
Tahir Heart Institute
author@example.com

Paper: TriageWorkbench - Rule-Based Lifecycle Freezing for the Unresolved Portfolio Queue

Can the portfolio's unresolved queue be reduced before more dashboards inherit the same ambiguity today? We reused the bundled ResearchConstellation snapshot and isolated 83 projects currently lacking explicit status labels across the 134-project portfolio. TriageWorkbench v0.1 applied deterministic rules to each unresolved row, weighting tests, manuscript, dashboard, review clean, and generic root paths to suggest a lifecycle label and confidence tier. The workbench produced non-triage recommendations for 65.1 percent of unresolved rows (54 of 83), leaving 29 unreduced and only 42.2 percent (35 of 83) reaching medium-or-high confidence. Recommendation pressure centered in tiers 10 and 12, which supplied 57 of 83 unresolved inputs, while active-like suggestions still dominated the generated label mix. This makes the next portfolio step a curation workflow problem, because deterministic triage can substantially shrink the queue before manual review begins. The workbench improves prioritization, but it does not inspect folders, confirm git state, or guarantee that its rule-based labels are consistently correct.

Outside Notes

Type: methods
Primary estimand: non-triage recommendation coverage across unresolved rows
App: TriageWorkbench v0.1
Code: repository root, scripts/build_triage_workbench.py, triage-recommendations.json, and data-source/portfolio-data.snapshot.json
Date: 2026-03-30
Validation: PASS
Protocol: e156-submission/protocol.md
