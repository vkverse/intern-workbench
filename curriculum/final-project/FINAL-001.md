---
id: FINAL-001
phase: FINAL
title: Select the Product and Clarify Requirements
type: DESIGN
difficulty: intermediate
guidance: INDEPENDENT
estimated_time: 2-3 hours
prerequisites:
  - CSS-007
  - NODE-003
  - TEST-002
skills:
  - capstone
  - evidence
status: active
exercise: capstone
---

# FINAL-001 — Select the Product and Clarify Requirements

## Objective

Scope a workshop directory as a small capstone.

## Context

This v0.5 exercise is part of the [starter route](../../tracks/starter.md). Read the [exercise contract](../../exercises/capstone/README.md) before editing. Your mentor agrees the assignment and AI policy in an Issue.

## What You Need to Learn

Use the concepts in the requirements below and the official references in the exercise contract. Explain unfamiliar terms in your own words; do not reproduce a tutorial.

## Requirements

1. Write a product brief for attendees to browse sessions and request a seat; mentors administer capacity.
2. Define duplicate-request behavior, full sessions, validation, privacy, and accessibility acceptance criteria.
3. Propose frontend/API/data boundaries, milestones, test strategy, and two deliberate exclusions. Include a mentor approval gate before implementation.

## Files / Folders

Run `npm run workbench -- start FINAL-001 octocat` from the repository root after replacing `octocat` with your GitHub username. Work in `submissions/<github-username>/FINAL-001/`. Keep shared curriculum and exercise contracts unchanged.

## Implementation Guidance

Read the contract, predict the result of one example, then implement a small step and check it. The preparation command creates an evidence README and starter files where needed; it refuses to overwrite existing work. For design/review work, choose your own structure within the stated deliverables.

## Restrictions

Use fictional data. Do not weaken provided checks, copy other interns' submissions, or claim evidence you did not collect. AI policy comes from your assigned Issue; if it prohibits AI, request a policy exception before using it. An assisted workflow demonstration is not proof of independent competence.

## Acceptance Criteria

- [ ] The plan is small enough for a 2-3 day learning project.
- [ ] Business rules are testable and failure states are explicit.
- [ ] Authentication and persistence choices are decisions to review; this task does not claim to implement them.

## How to Run

From the repository root: `npm run workbench -- start FINAL-001 octocat`. Replace `octocat` before running. For HTML, open your submission's index.html in a browser. For NODE-003, use the HTTP runner documented in the exercise contract. For function tasks, the test command below executes your solution. For documentation, preview README.md in your editor.

## How to Test

Run `npm run workbench -- check FINAL-001 octocat` and `npm run validate` from the root. Replace `octocat` with your username. The first command checks submission evidence plus available exercise tests; the second validates the framework. Browser behavior and prose accuracy need manual review. A starter may intentionally fail until completed.

## Expected Evidence

Fill Outcome, Approach, Evidence, Reflection, and AI Usage in your submission README. Include actual commands and outcomes, observed failures, and task-specific examples. Add screenshots or traces when required by acceptance criteria; remove sensitive data.

## Documentation Requirements

Explain one decision, one limitation, and what another intern must do to reproduce your result. Keep factual evidence separate from planned work.

## AI Usage Requirements

State Yes or No truthfully. When Yes, name tools, what was generated, your changes, and actual verification. Leave understanding as unverified until you can explain the submission to the mentor.

## Submission Instructions

Create the assigned Issue first. Implement on your branch, run checks, commit only your submission directory, push to your fork, and open a PR targeting the mentor repository. Follow [onboarding](../../ONBOARDING.md).

## Branch Name

`task/<github-username>/final-001-capstone`

Replace the placeholder; for example `task/octocat/final-001-capstone`.

## Commit Message

`docs: submit FINAL-001 evidence` for documentation; use `feat:` or `fix:` when implementing behavior.

## Pull Request Requirements

Include task ID, the actual assigned Issue number, validation results, AI disclosure, and limitations. Use `Closes #N` only after replacing N with the Issue number in the target repository. Do not self-certify learning outcomes you have not demonstrated.

## Mentor Review Checklist

- [ ] Verify: The plan is small enough for a 2-3 day learning project.
- [ ] Verify: Business rules are testable and failure states are explicit.
- [ ] Verify: Authentication and persistence choices are decisions to review; this task does not claim to implement them.
- [ ] Ask the intern to explain one example and respond to one changed requirement.
- [ ] Check AI policy compliance separately from test results.

## Common Mistakes

Treating green framework CI as proof that the task is complete; editing the supplied contract; working in another intern's directory; using a placeholder literally in a shell command.

## Definition of Done

The deliverables satisfy the task-specific acceptance criteria, evidence is truthful, checks pass, and the mentor has reviewed and merged the PR. Completion records an exercise outcome, not a certification of developer readiness.

## Optional Extension

Propose one additional case relevant to this exercise and explain why it matters. Obtain mentor agreement before extending the implementation.

