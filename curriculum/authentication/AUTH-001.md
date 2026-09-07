---
id: AUTH-001
phase: AUTH
title: Authentication, Authorization, and Threat Models
type: BUILD
difficulty: advanced
guidance: PARTIALLY-GUIDED
estimated_time: 2-4 hours
prerequisites:
  - DB-010
skills:
  - authentication
  - authorization
  - security
status: draft
---

# AUTH-001 — Authentication, Authorization, and Threat Models

## Objective

Complete a reviewable engineering exercise that demonstrates **authentication, authorization, and threat models** and explain the decisions you made.

## Context

This is task 1 in the Authentication and Authorization phase. It builds one durable skill inside the same GitHub workflow used for product work: issue, branch, implementation, validation, pull request, review, and revision.

## What You Need to Learn

- The core concepts behind authentication, authorization, and threat models.
- How to recognize success and failure using observable evidence.
- How this skill affects users, maintainers, and adjacent systems.

## Requirements

1. Create or update the task artifact under `projects/full-stack/auth-001/`; do not scatter unrelated changes across the repository.
2. Add a short `README.md` in that task artifact containing the problem, your plan, commands used, and result.
3. Produce the smallest working example or analysis that demonstrates authentication, authorization, and threat models.
4. Cover one normal case, one edge case, and one failure case relevant to the task.
5. Record at least one tradeoff or alternative you considered.
6. Keep the change reproducible by another intern from a clean checkout.

## Files / Folders

- Primary workspace: `projects/full-stack/auth-001/`
- Evidence: `projects/full-stack/auth-001/README.md`
- Tests or checks: colocate with the implementation using the project convention.

## Implementation Guidance

Write a short plan first, then choose the implementation details yourself.

Start with a failing observation or explicit expected outcome. Work in small increments and keep command output needed for review concise.

## Restrictions

Use established cryptographic libraries; never invent authentication primitives.

- Do not commit generated dependencies, build output, credentials, tokens, or personal data.
- Do not change unrelated files or weaken an existing check to make validation pass.

## Acceptance Criteria

- [ ] The artifact directly demonstrates authentication, authorization, and threat models.
- [ ] A reviewer can reproduce the result using only committed instructions.
- [ ] Normal, edge, and failure behavior are covered.
- [ ] The implementation or analysis is scoped to this task.
- [ ] Decisions and tradeoffs are explained in the task README.
- [ ] No secrets, machine-specific paths, or unrelated formatting changes are present.

## How to Run

From the repository root, enter `projects/full-stack/auth-001` and follow its README. If the task is documentation or investigation only, render/preview the Markdown and run the repository validation command instead.

## How to Test

Run `npm run validate` from the repository root. Also run the closest project-specific test, build, or manual check documented in the artifact README.

## Expected Evidence

- Commands run and their pass/fail outcome.
- Tests, screenshots, request traces, query plans, or diagrams appropriate to the work.
- A concise before/after comparison for debugging, refactoring, security, and performance work.

## Documentation Requirements

Document setup, execution, validation, limitations, and any assumption that affects the result. Link to official references instead of copying long tutorials.

## AI Usage Requirements

Complete the PR template's AI Usage section. If AI was used, identify what it suggested, what you changed, how you verified it, and one part you can explain without assistance.

## Submission Instructions

1. Confirm the assigned issue title starts with `[AUTH-001]`.
2. Create the required branch, commit only task-related work, push it, and open a pull request.
3. Link the issue, include evidence, request review, and respond to every review thread.

## Branch Name

`task/<github-username>/auth-001-authentication-authorization-and-threat-mo`

## Commit Message

`build: complete auth-001 authentication, authorization, and threat models`

## Pull Request Requirements

Use the repository PR template, link the issue with `Closes #<issue-number>`, list validation commands, disclose AI usage, and attach evidence appropriate to the task.

## Mentor Review Checklist

- [ ] Ask the intern to explain the core concept and one decision without reading notes.
- [ ] Confirm the evidence proves the acceptance criteria rather than merely showing activity.
- [ ] Inspect edge/failure handling and the scope of the diff.
- [ ] Check that tests would fail for a meaningful regression.
- [ ] Evaluate independence at the expected `PARTIALLY-GUIDED` level.

## Common Mistakes

- Treating command completion as proof that the requirement is satisfied.
- Copying a solution without explaining its behavior or limitations.
- Testing only the happy path.
- Expanding scope or modifying unrelated code.

## Definition of Done

The acceptance criteria pass, repository validation succeeds, the PR contains reproducible evidence and AI disclosure, review feedback is resolved, and the intern can explain the work.

## Optional Extension

Demonstrate a second approach, compare its tradeoffs, and explain when it would be preferable. Do not include the extension in the main implementation unless the mentor agrees.

