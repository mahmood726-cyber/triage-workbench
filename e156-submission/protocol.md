Mahmood Ahmad
Tahir Heart Institute
author@example.com

Protocol: TriageWorkbench - Rule-Based Lifecycle Recommendation Audit

This protocol describes a snapshot-first triage study using the bundled `data-source/portfolio-data.snapshot.json` copied from `ResearchConstellation`. Eligible records are the 83 indexed portfolio rows that still lack explicit lifecycle labels in the bundled snapshot. The primary estimand is non-triage recommendation coverage, defined as the proportion of unresolved rows receiving a rule-based label other than `needs-triage`. Secondary outputs will count medium- and high-confidence recommendations, residual low-confidence rows, recommendation mix by status, and unresolved input pressure by tier. The build process will emit `triage-recommendations.json`, `data.json`, `data.js`, and a static dashboard for browser review. Rules will use transparent text signals, path priors, and project-type priors rather than hidden model weights so that each suggestion remains auditable. Anticipated limitations include no folder inspection, no git-state confirmation, no outcome validation against future human review, and the possibility that strong lexical signals still map to the wrong lifecycle state.

Outside Notes

Type: protocol
Primary estimand: non-triage recommendation coverage across unresolved rows
App: TriageWorkbench v0.1
Code: repository root, scripts/build_triage_workbench.py, triage-recommendations.json, and data-source/portfolio-data.snapshot.json
Date: 2026-03-30
Validation: DRAFT

References

1. Page MJ, McKenzie JE, Bossuyt PM, et al. The PRISMA 2020 statement. BMJ. 2021;372:n71.
2. Sandve GK, Nekrutenko A, Taylor J, Hovig E. Ten simple rules for reproducible computational research. PLoS Comput Biol. 2013;9:e1003285.
3. Borenstein M, Hedges LV, Higgins JPT, Rothstein HR. Introduction to Meta-Analysis. 2nd ed. Wiley; 2021.

AI Disclosure

This protocol was drafted from versioned local artifacts and deterministic build logic. AI was used as a drafting and implementation assistant under author supervision, with the author retaining responsibility for scope, methods, and reporting choices.
