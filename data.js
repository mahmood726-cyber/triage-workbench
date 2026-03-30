window.TRIAGE_WORKBENCH_DATA = {
  "project": {
    "name": "TriageWorkbench",
    "version": "0.1.0",
    "generatedAt": "2026-03-30T08:46:00+00:00",
    "sourcePath": "data-source/INDEX.snapshot.md",
    "designBasis": [
      "Rule-based lifecycle recommendation engine",
      "Confidence-tiered triage dashboard",
      "Static GitHub Pages delivery"
    ]
  },
  "metrics": {
    "sourcePath": "data-source/INDEX.snapshot.md",
    "trackedProjects": 134,
    "unresolvedProjects": 83,
    "recommendedNonTriage": 54,
    "recommendedNonTriagePercent": 65.1,
    "mediumOrHighCount": 35,
    "mediumOrHighPercent": 42.2,
    "highConfidenceCount": 19,
    "highConfidencePercent": 22.9
  },
  "statusBreakdown": [
    {
      "status": "Active",
      "key": "active",
      "count": 33
    },
    {
      "status": "Needs triage",
      "key": "needs-triage",
      "count": 29
    },
    {
      "status": "Shipped",
      "key": "shipped",
      "count": 9
    },
    {
      "status": "Submission ready",
      "key": "submission-ready",
      "count": 8
    },
    {
      "status": "Review",
      "key": "review",
      "count": 4
    }
  ],
  "confidenceBreakdown": [
    {
      "confidence": "Low",
      "count": 48
    },
    {
      "confidence": "High",
      "count": 19
    },
    {
      "confidence": "Medium",
      "count": 16
    }
  ],
  "tierPressure": [
    {
      "tier": "Tier 10",
      "count": 32
    },
    {
      "tier": "Tier 12",
      "count": 25
    },
    {
      "tier": "Tier 6",
      "count": 8
    },
    {
      "tier": "Tier 1",
      "count": 4
    },
    {
      "tier": "Tier 11",
      "count": 4
    },
    {
      "tier": "Tier 9",
      "count": 4
    },
    {
      "tier": "Tier 5",
      "count": 3
    },
    {
      "tier": "Tier 8",
      "count": 3
    }
  ],
  "highConfidenceExamples": [
    {
      "id": "5",
      "name": "Bias Forensics",
      "tier": "Tier 1",
      "tierName": "Tier 1 \u2014 Flagship Projects (active or near-submission)",
      "type": "Python pipeline",
      "path": "C:\\BiasForensics\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "high",
      "score": 16,
      "margin": 9,
      "rationale": [
        "Matched 'tests'",
        "Matched 'pipeline'",
        "Matched 'forensics'",
        "Matched 'methods'"
      ],
      "sourceStatus": ""
    },
    {
      "id": "1",
      "name": "CardioOracle",
      "tier": "Tier 1",
      "tierName": "Tier 1 \u2014 Flagship Projects (active or near-submission)",
      "type": "HTML app",
      "path": "C:\\Models\\CardioOracle\\",
      "recommendedStatus": "submission-ready",
      "recommendedStatusLabel": "Submission ready",
      "confidence": "high",
      "score": 11,
      "margin": 6,
      "rationale": [
        "Matched 'journal'",
        "Matched 'target'",
        "Matched 'lancet'"
      ],
      "sourceStatus": ""
    },
    {
      "id": "63",
      "name": "Asa",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Model",
      "path": "C:\\Models\\Asa\\",
      "recommendedStatus": "review",
      "recommendedStatusLabel": "Review",
      "confidence": "high",
      "score": 20,
      "margin": 10,
      "rationale": [
        "Matched 'review clean'",
        "Matched 'review'",
        "Review-clean override"
      ],
      "sourceStatus": "v2.0.0, 7 fangs, 85/85 tests, REVIEW CLEAN"
    },
    {
      "id": "109",
      "name": "Bayesian MA",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Model",
      "path": "C:\\Models\\BayesianMA\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "high",
      "score": 10,
      "margin": 10,
      "rationale": [
        "Matched 'tests'",
        "Matched 'v1.0'",
        "Model prior"
      ],
      "sourceStatus": "v1.0, 25/25 tests, normal-normal hierarchical"
    },
    {
      "id": "103",
      "name": "Component NMA",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Model",
      "path": "C:\\Models\\ComponentNMA\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "high",
      "score": 10,
      "margin": 10,
      "rationale": [
        "Matched 'tests'",
        "Matched 'v1.1'",
        "Model prior"
      ],
      "sourceStatus": "v1.1, 25/25 tests, cNMA + interactions + RE"
    },
    {
      "id": "105",
      "name": "EvidenceQuality (Concordance)",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Root-level project",
      "path": "C:\\EvidenceQuality\\",
      "recommendedStatus": "submission-ready",
      "recommendedStatusLabel": "Submission ready",
      "confidence": "high",
      "score": 9,
      "margin": 5,
      "rationale": [
        "Matched 'manuscript'",
        "Matched 'bmj'"
      ],
      "sourceStatus": "6D quality concordance, 403 reviews, 14 tests, BMJ manuscript"
    },
    {
      "id": "73f",
      "name": "Living MA Engine",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Project",
      "path": "C:\\Projects\\living-meta-engine\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "high",
      "score": 8,
      "margin": 8,
      "rationale": [
        "Matched 'engine'",
        "Matched 'configs'",
        "Living workflow prior"
      ],
      "sourceStatus": "902L unified engine, 3 therapy configs"
    },
    {
      "id": "106",
      "name": "MA Power",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Model",
      "path": "C:\\Models\\MAPowerCalc\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "high",
      "score": 10,
      "margin": 10,
      "rationale": [
        "Matched 'tests'",
        "Matched 'v1.0'",
        "Model prior"
      ],
      "sourceStatus": "v1.0, 25/25 tests, power + sample size + curves"
    },
    {
      "id": "110",
      "name": "MA Workbench",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Model",
      "path": "C:\\Models\\MAWorkbench\\",
      "recommendedStatus": "shipped",
      "recommendedStatusLabel": "Shipped",
      "confidence": "high",
      "score": 9,
      "margin": 4,
      "rationale": [
        "Matched 'landing page'",
        "Matched 'tool cards'"
      ],
      "sourceStatus": "SR workflow landing page, 30+ tool cards"
    },
    {
      "id": "79",
      "name": "MetaGuard",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Model",
      "path": "C:\\Models\\MetaGuard\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "high",
      "score": 14,
      "margin": 14,
      "rationale": [
        "Matched 'tests'",
        "Matched 'v1.0'",
        "Matched 'engine'",
        "Model prior"
      ],
      "sourceStatus": "v1.0.0, 3 frontier engines (DPD+RTMA+MetaForest), 22/22 tests"
    },
    {
      "id": "80",
      "name": "MetaMethods",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Model",
      "path": "C:\\Models\\MetaMethods\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "high",
      "score": 13,
      "margin": 13,
      "rationale": [
        "Matched 'tests'",
        "Matched 'module'",
        "Matched 'methods'",
        "Model prior"
      ],
      "sourceStatus": "6 advanced methods Python module, 30/30 tests"
    },
    {
      "id": "73e",
      "name": "Portfolio Site",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Project",
      "path": "C:\\Projects\\portfolio-site\\",
      "recommendedStatus": "shipped",
      "recommendedStatusLabel": "Shipped",
      "confidence": "high",
      "score": 16,
      "margin": 13,
      "rationale": [
        "Matched 'github pages ready'",
        "Matched 'showcase'",
        "Matched 'site'",
        "Site naming prior"
      ],
      "sourceStatus": "794L showcase, GitHub Pages ready"
    }
  ],
  "reviewQueue": [
    {
      "id": "2",
      "name": "Fragility Atlas",
      "tier": "Tier 1",
      "tierName": "Tier 1 \u2014 Flagship Projects (active or near-submission)",
      "type": "Pipeline+Dashboard",
      "path": "C:\\FragilityAtlas\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "low",
      "score": 11,
      "margin": 0,
      "rationale": [
        "Matched 'tests'",
        "Matched 'pipeline'",
        "Pipeline+Dashboard prior"
      ],
      "sourceStatus": ""
    },
    {
      "id": "68",
      "name": "3dvitreous-grapher",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Project",
      "path": "C:\\Projects\\3dvitreous-grapher\\",
      "recommendedStatus": "needs-triage",
      "recommendedStatusLabel": "Needs triage",
      "confidence": "low",
      "score": 0,
      "margin": 0,
      "rationale": [
        "No rule-based signal exceeded zero."
      ],
      "sourceStatus": "3D visualization"
    },
    {
      "id": "73a",
      "name": "Asa",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Model",
      "path": "C:\\Models\\Asa\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "low",
      "score": 3,
      "margin": 3,
      "rationale": [
        "Model prior"
      ],
      "sourceStatus": "Forensic data integrity screener (2026-03-25)"
    },
    {
      "id": "108",
      "name": "Evidence Half-Life",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Root-level project",
      "path": "C:\\EvidenceHalfLife\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "low",
      "score": 4,
      "margin": 0,
      "rationale": [
        "Matched 'tests'"
      ],
      "sourceStatus": "Cumulative multiverse, 307 reviews, 15 tests, 57% never stabilize"
    },
    {
      "id": "69",
      "name": "LivingMeta Watchman",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Project",
      "path": "C:\\Projects\\LivingMeta_Watchman_Amulet\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "low",
      "score": 2,
      "margin": 0,
      "rationale": [
        "Living workflow prior"
      ],
      "sourceStatus": "Living MA app"
    },
    {
      "id": "73d",
      "name": "new-app",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Project",
      "path": "C:\\Projects\\new-app\\",
      "recommendedStatus": "shipped",
      "recommendedStatusLabel": "Shipped",
      "confidence": "low",
      "score": 2,
      "margin": 2,
      "rationale": [
        "Matched 'app'"
      ],
      "sourceStatus": "Minimal app"
    },
    {
      "id": "73b",
      "name": "oman",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Project",
      "path": "C:\\Projects\\oman\\",
      "recommendedStatus": "shipped",
      "recommendedStatusLabel": "Shipped",
      "confidence": "low",
      "score": 2,
      "margin": 2,
      "rationale": [
        "Matched 'app'"
      ],
      "sourceStatus": "Oman HTA app"
    },
    {
      "id": "72",
      "name": "rayyanreplacement",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Project",
      "path": "C:\\Projects\\rayyanreplacement\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "low",
      "score": 2,
      "margin": 2,
      "rationale": [
        "Matched 'tool'"
      ],
      "sourceStatus": "Screening tool"
    },
    {
      "id": "104",
      "name": "RMST Meta",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Root-level project",
      "path": "C:\\RMSTmeta\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "low",
      "score": 3,
      "margin": 0,
      "rationale": [
        "Matched 'v1.1'"
      ],
      "sourceStatus": "v1.1, 1,660 lines, REML+DL+Egger's, Stat Med target"
    },
    {
      "id": "73c",
      "name": "superapp",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Project",
      "path": "C:\\Projects\\superapp\\",
      "recommendedStatus": "shipped",
      "recommendedStatusLabel": "Shipped",
      "confidence": "low",
      "score": 2,
      "margin": 2,
      "rationale": [
        "Matched 'app'"
      ],
      "sourceStatus": "Minimal app"
    },
    {
      "id": "71",
      "name": "Tricuspid TEER",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Project",
      "path": "C:\\Projects\\Tricuspid_TEER_LivingMeta\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "low",
      "score": 3,
      "margin": 3,
      "rationale": [
        "Matched 'tracker'"
      ],
      "sourceStatus": "Tricuspid tracker"
    },
    {
      "id": "76",
      "name": "childnajia",
      "tier": "Tier 11",
      "tierName": "Tier 11 \u2014 Website & Non-Academic",
      "type": "Project",
      "path": "C:\\Projects\\childnajia\\",
      "recommendedStatus": "shipped",
      "recommendedStatusLabel": "Shipped",
      "confidence": "low",
      "score": 2,
      "margin": 2,
      "rationale": [
        "Matched 'app'"
      ],
      "sourceStatus": "Children's app"
    },
    {
      "id": "78",
      "name": "Stories",
      "tier": "Tier 11",
      "tierName": "Tier 11 \u2014 Website & Non-Academic",
      "type": "Project",
      "path": "C:\\Projects\\Stories\\",
      "recommendedStatus": "needs-triage",
      "recommendedStatusLabel": "Needs triage",
      "confidence": "low",
      "score": 0,
      "margin": 0,
      "rationale": [
        "No rule-based signal exceeded zero."
      ],
      "sourceStatus": "CAST narrative"
    },
    {
      "id": "77",
      "name": "waternajia",
      "tier": "Tier 11",
      "tierName": "Tier 11 \u2014 Website & Non-Academic",
      "type": "Project",
      "path": "C:\\Projects\\waternajia\\",
      "recommendedStatus": "shipped",
      "recommendedStatusLabel": "Shipped",
      "confidence": "low",
      "score": 2,
      "margin": 2,
      "rationale": [
        "Matched 'app'"
      ],
      "sourceStatus": "Water app"
    }
  ],
  "allRecommendations": [
    {
      "id": "5",
      "name": "Bias Forensics",
      "tier": "Tier 1",
      "tierName": "Tier 1 \u2014 Flagship Projects (active or near-submission)",
      "type": "Python pipeline",
      "path": "C:\\BiasForensics\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "high",
      "score": 16,
      "margin": 9,
      "rationale": [
        "Matched 'tests'",
        "Matched 'pipeline'",
        "Matched 'forensics'",
        "Matched 'methods'"
      ],
      "sourceStatus": ""
    },
    {
      "id": "1",
      "name": "CardioOracle",
      "tier": "Tier 1",
      "tierName": "Tier 1 \u2014 Flagship Projects (active or near-submission)",
      "type": "HTML app",
      "path": "C:\\Models\\CardioOracle\\",
      "recommendedStatus": "submission-ready",
      "recommendedStatusLabel": "Submission ready",
      "confidence": "high",
      "score": 11,
      "margin": 6,
      "rationale": [
        "Matched 'journal'",
        "Matched 'target'",
        "Matched 'lancet'"
      ],
      "sourceStatus": ""
    },
    {
      "id": "2",
      "name": "Fragility Atlas",
      "tier": "Tier 1",
      "tierName": "Tier 1 \u2014 Flagship Projects (active or near-submission)",
      "type": "Pipeline+Dashboard",
      "path": "C:\\FragilityAtlas\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "low",
      "score": 11,
      "margin": 0,
      "rationale": [
        "Matched 'tests'",
        "Matched 'pipeline'",
        "Pipeline+Dashboard prior"
      ],
      "sourceStatus": ""
    },
    {
      "id": "3",
      "name": "MetaReproducer",
      "tier": "Tier 1",
      "tierName": "Tier 1 \u2014 Flagship Projects (active or near-submission)",
      "type": "Python pipeline+HTML",
      "path": "C:\\Models\\MetaReproducer\\",
      "recommendedStatus": "submission-ready",
      "recommendedStatusLabel": "Submission ready",
      "confidence": "medium",
      "score": 16,
      "margin": 1,
      "rationale": [
        "Matched 'manuscript'",
        "Matched 'journal'",
        "Matched 'target'",
        "Matched 'bmj'"
      ],
      "sourceStatus": ""
    },
    {
      "id": "68",
      "name": "3dvitreous-grapher",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Project",
      "path": "C:\\Projects\\3dvitreous-grapher\\",
      "recommendedStatus": "needs-triage",
      "recommendedStatusLabel": "Needs triage",
      "confidence": "low",
      "score": 0,
      "margin": 0,
      "rationale": [
        "No rule-based signal exceeded zero."
      ],
      "sourceStatus": "3D visualization"
    },
    {
      "id": "63",
      "name": "Asa",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Model",
      "path": "C:\\Models\\Asa\\",
      "recommendedStatus": "review",
      "recommendedStatusLabel": "Review",
      "confidence": "high",
      "score": 20,
      "margin": 10,
      "rationale": [
        "Matched 'review clean'",
        "Matched 'review'",
        "Review-clean override"
      ],
      "sourceStatus": "v2.0.0, 7 fangs, 85/85 tests, REVIEW CLEAN"
    },
    {
      "id": "73a",
      "name": "Asa",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Model",
      "path": "C:\\Models\\Asa\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "low",
      "score": 3,
      "margin": 3,
      "rationale": [
        "Model prior"
      ],
      "sourceStatus": "Forensic data integrity screener (2026-03-25)"
    },
    {
      "id": "109",
      "name": "Bayesian MA",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Model",
      "path": "C:\\Models\\BayesianMA\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "high",
      "score": 10,
      "margin": 10,
      "rationale": [
        "Matched 'tests'",
        "Matched 'v1.0'",
        "Model prior"
      ],
      "sourceStatus": "v1.0, 25/25 tests, normal-normal hierarchical"
    },
    {
      "id": "107",
      "name": "BenfordMA",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Root-level project",
      "path": "C:\\BenfordMA\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "medium",
      "score": 6,
      "margin": 2,
      "rationale": [
        "Matched 'v1.0'",
        "Matched 'forensics'"
      ],
      "sourceStatus": "v1.0, 1,488 lines, Benford digit forensics for 403 reviews, MAD=0.020"
    },
    {
      "id": "103",
      "name": "Component NMA",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Model",
      "path": "C:\\Models\\ComponentNMA\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "high",
      "score": 10,
      "margin": 10,
      "rationale": [
        "Matched 'tests'",
        "Matched 'v1.1'",
        "Model prior"
      ],
      "sourceStatus": "v1.1, 25/25 tests, cNMA + interactions + RE"
    },
    {
      "id": "66",
      "name": "ctgov-search-strategies",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Project",
      "path": "C:\\Projects\\ctgov-search-strategies\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "medium",
      "score": 4,
      "margin": 4,
      "rationale": [
        "Matched 'api'"
      ],
      "sourceStatus": "API integrations"
    },
    {
      "id": "67",
      "name": "cv-rct-analysis",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Project",
      "path": "C:\\Projects\\cv-rct-analysis\\",
      "recommendedStatus": "shipped",
      "recommendedStatusLabel": "Shipped",
      "confidence": "medium",
      "score": 4,
      "margin": 1,
      "rationale": [
        "Matched 'dashboard'"
      ],
      "sourceStatus": "Analysis dashboard"
    },
    {
      "id": "108",
      "name": "Evidence Half-Life",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Root-level project",
      "path": "C:\\EvidenceHalfLife\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "low",
      "score": 4,
      "margin": 0,
      "rationale": [
        "Matched 'tests'"
      ],
      "sourceStatus": "Cumulative multiverse, 307 reviews, 15 tests, 57% never stabilize"
    },
    {
      "id": "105",
      "name": "EvidenceQuality (Concordance)",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Root-level project",
      "path": "C:\\EvidenceQuality\\",
      "recommendedStatus": "submission-ready",
      "recommendedStatusLabel": "Submission ready",
      "confidence": "high",
      "score": 9,
      "margin": 5,
      "rationale": [
        "Matched 'manuscript'",
        "Matched 'bmj'"
      ],
      "sourceStatus": "6D quality concordance, 403 reviews, 14 tests, BMJ manuscript"
    },
    {
      "id": "73f",
      "name": "Living MA Engine",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Project",
      "path": "C:\\Projects\\living-meta-engine\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "high",
      "score": 8,
      "margin": 8,
      "rationale": [
        "Matched 'engine'",
        "Matched 'configs'",
        "Living workflow prior"
      ],
      "sourceStatus": "902L unified engine, 3 therapy configs"
    },
    {
      "id": "69",
      "name": "LivingMeta Watchman",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Project",
      "path": "C:\\Projects\\LivingMeta_Watchman_Amulet\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "low",
      "score": 2,
      "margin": 0,
      "rationale": [
        "Living workflow prior"
      ],
      "sourceStatus": "Living MA app"
    },
    {
      "id": "106",
      "name": "MA Power",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Model",
      "path": "C:\\Models\\MAPowerCalc\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "high",
      "score": 10,
      "margin": 10,
      "rationale": [
        "Matched 'tests'",
        "Matched 'v1.0'",
        "Model prior"
      ],
      "sourceStatus": "v1.0, 25/25 tests, power + sample size + curves"
    },
    {
      "id": "110",
      "name": "MA Workbench",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Model",
      "path": "C:\\Models\\MAWorkbench\\",
      "recommendedStatus": "shipped",
      "recommendedStatusLabel": "Shipped",
      "confidence": "high",
      "score": 9,
      "margin": 4,
      "rationale": [
        "Matched 'landing page'",
        "Matched 'tool cards'"
      ],
      "sourceStatus": "SR workflow landing page, 30+ tool cards"
    },
    {
      "id": "113",
      "name": "Meta-Regression",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Model",
      "path": "C:\\Models\\MetaRegression\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "medium",
      "score": 6,
      "margin": 3,
      "rationale": [
        "Matched 'v1.0'",
        "Model prior"
      ],
      "sourceStatus": "v1.0, world-first browser meta-regression"
    },
    {
      "id": "65",
      "name": "MetaExtract",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Project",
      "path": "C:\\Projects\\MetaExtract\\",
      "recommendedStatus": "review",
      "recommendedStatusLabel": "Review",
      "confidence": "medium",
      "score": 4,
      "margin": 4,
      "rationale": [
        "Matched 'fixes done'"
      ],
      "sourceStatus": "P0+P1 fixes done"
    },
    {
      "id": "79",
      "name": "MetaGuard",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Model",
      "path": "C:\\Models\\MetaGuard\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "high",
      "score": 14,
      "margin": 14,
      "rationale": [
        "Matched 'tests'",
        "Matched 'v1.0'",
        "Matched 'engine'",
        "Model prior"
      ],
      "sourceStatus": "v1.0.0, 3 frontier engines (DPD+RTMA+MetaForest), 22/22 tests"
    },
    {
      "id": "80",
      "name": "MetaMethods",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Model",
      "path": "C:\\Models\\MetaMethods\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "high",
      "score": 13,
      "margin": 13,
      "rationale": [
        "Matched 'tests'",
        "Matched 'module'",
        "Matched 'methods'",
        "Model prior"
      ],
      "sourceStatus": "6 advanced methods Python module, 30/30 tests"
    },
    {
      "id": "108a",
      "name": "MetaShift",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Root-level project",
      "path": "C:\\MetaShift\\",
      "recommendedStatus": "active",
      "recommendedStatusLabel": "Active",
      "confidence": "medium",
      "score": 6,
      "margin": 6,
      "rationale": [
        "Matched 'v1.0'",
        "Matched 'detection'"
      ],
      "sourceStatus": "v1.0, 1,325 lines, CUSUM/PELT changepoint detection for cumulative MA"
    },
    {
      "id": "73",
      "name": "minireview",
      "tier": "Tier 10",
      "tierName": "Tier 10 \u2014 Smaller / Standalone Apps",
      "type": "Project",
      "path": "C:\\Projects\\minireview\\",
      "recommendedStatus": "review",
      "recommendedStatusLabel": "Review",
      "confidence": "medium",
      "score": 4,
      "margin": 2,
      "rationale": [
        "Matched 'review'"
      ],
      "sourceStatus": "Quick review app"
    }
  ]
};
