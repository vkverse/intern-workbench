---
id: HTML-008
phase: HTML
title: Run an HTML Accessibility Audit
type: INVESTIGATE
difficulty: beginner
guidance: GUIDED
estimated_time: 45-60 minutes
prerequisites:
  - HTML-004
skills:
  - accessibility
  - evidence
status: active
exercise: accessibility
---

# HTML-008 — Run an HTML Accessibility Audit

## Objective

Audit the workshop form with keyboard and browser tools.

## Context

This v0.5 exercise is part of the [starter route](../../tracks/starter.md). Read the [exercise contract](../../exercises/accessibility/README.md) before editing. Your mentor agrees the assignment and AI policy in an Issue.

## What You Need to Learn

Use the concepts in the requirements below and the official references in the exercise contract. Explain unfamiliar terms in your own words; do not reproduce a tutorial.

## Requirements

1. Copy your completed registration page into this submission as index.html.
2. Record keyboard order, label associations, headings, and zoom behavior at 200 percent.
3. Identify and fix two observed usability problems, or document evidence that two suspected problems were not reproducible.

## Files / Folders

Run `npm run workbench -- start HTML-008 octocat` from the repository root after replacing `octocat` with your GitHub username. Work in `submissions/<github-username>/HTML-008/`. Keep shared curriculum and exercise contracts unchanged.

## Implementation Guidance

Read the contract, predict the result of one example, then implement a small step and check it. The preparation command creates an evidence README and starter files where needed; it refuses to overwrite existing work. For design/review work, choose your own structure within the stated deliverables.

## Restrictions

Use fictional data. Do not weaken provided checks, copy other interns' submissions, or claim evidence you did not collect. AI policy comes from your assigned Issue; if it prohibits AI, request a policy exception before using it. An assisted workflow demonstration is not proof of independent competence.

## Acceptance Criteria

- [ ] Findings include reproducible steps and actual observations.
- [ ] Each change has before/after evidence.
- [ ] Passing automated HTML checks is not presented as proof of full accessibility.

## How to Run

From the repository root: `npm run workbench -- start HTML-008 octocat`. Replace `octocat` before running. For HTML, open your submission's index.html in a browser. For NODE-003, use the HTTP runner documented in the exercise contract. For function tasks, the test command below executes your solution. For documentation, preview README.md in your editor.

## How to Test

Run `npm run workbench -- check HTML-008 octocat` and `npm run validate` from the root. Replace `octocat` with your username. The first command checks submission evidence plus available exercise tests; the second validates the framework. Browser behavior and prose accuracy need manual review. A starter may intentionally fail until completed.

## Expected Evidence

Fill Outcome, Approach, Evidence, Reflection, and AI Usage in your submission README. Include actual commands and outcomes, observed failures, and task-specific examples. Add screenshots or traces when required by acceptance criteria; remove sensitive data.

## Documentation Requirements

Explain one decision, one limitation, and what another intern must do to reproduce your result. Keep factual evidence separate from planned work.

## AI Usage Requirements

State Yes or No truthfully. When Yes, name tools, what was generated, your changes, and actual verification. Leave understanding as unverified until you can explain the submission to the mentor.

## Submission Instructions

Create the assigned Issue first. Implement on your branch, run checks, commit only your submission directory, push to your fork, and open a PR targeting the mentor repository. Follow [onboarding](../../ONBOARDING.md).

## Branch Name

`task/<github-username>/html-008-accessibility`

Replace the placeholder; for example `task/octocat/html-008-accessibility`.

## Commit Message

`docs: submit HTML-008 evidence` for documentation; use `feat:` or `fix:` when implementing behavior.

## Pull Request Requirements

Include task ID, the actual assigned Issue number, validation results, AI disclosure, and limitations. Use `Closes #N` only after replacing N with the Issue number in the target repository. Do not self-certify learning outcomes you have not demonstrated.

## Mentor Review Checklist

- [ ] Verify: Findings include reproducible steps and actual observations.
- [ ] Verify: Each change has before/after evidence.
- [ ] Verify: Passing automated HTML checks is not presented as proof of full accessibility.
- [ ] Ask the intern to explain one example and respond to one changed requirement.
- [ ] Check AI policy compliance separately from test results.

## Common Mistakes

Treating green framework CI as proof that the task is complete; editing the supplied contract; working in another intern's directory; using a placeholder literally in a shell command.

## Definition of Done

The deliverables satisfy the task-specific acceptance criteria, evidence is truthful, checks pass, and the mentor has reviewed and merged the PR. Completion records an exercise outcome, not a certification of developer readiness.

## Optional Extension

Propose one additional case relevant to this exercise and explain why it matters. Obtain mentor agreement before extending the implementation.

