# ORI-001 — Software Development and Team Roles

## Problem

Software projects involve understanding requirements, designing solutions, implementing features, fixing bugs, testing changes, reviewing code, releasing updates, and maintaining the product. If responsibilities or communication are unclear, teams may build the wrong feature, duplicate work, introduce bugs, or delay delivery.

## My Plan

1. Explain what software development means.
2. Describe common software-team roles.
3. Explain how work moves from a requirement to a merged Pull Request.
4. Provide a normal case, an edge case, and a failure case.
5. Document one practical engineering tradeoff.
6. Review the Markdown and run repository validation.

## What Software Development Means

Software development is the process of planning, designing, building, testing, releasing, and maintaining a software product. It normally starts with a user or business problem. The team converts that problem into requirements, plans a solution, implements it, verifies the result, reviews the change, releases it, and continues maintaining it.

Software development is not only writing code. It also requires communication, problem-solving, documentation, testing, review, security awareness, and continuous maintenance.

## Common Team Roles

- **Product manager:** Identifies user and business problems, defines requirements, and prioritizes work.
- **Designer:** Creates user flows and interfaces that are understandable, accessible, and consistent.
- **Frontend developer:** Builds the pages, forms, navigation, and browser experiences that users interact with.
- **Backend developer:** Builds APIs, business logic, database integrations, authentication, and other server-side functionality.
- **Full-stack developer:** Works across frontend and backend areas according to the team's needs.
- **QA or test engineer:** Verifies expected behavior, edge cases, failure cases, and possible regressions.
- **Team lead:** Provides technical direction, helps divide work, reviews decisions, and supports the team.
- **DevOps or platform engineer:** Supports development environments, CI/CD, infrastructure, deployments, monitoring, and reliability.

These roles may overlap in a small company, but their responsibilities must still be understood and communicated.

## How Work Moves Through a Team

A product manager describes the user or business problem. The team clarifies the expected behavior and scope. A designer may prepare the user flow and interface. Developers study the requirement, plan the technical work, and implement it through small reviewable changes.

Automated checks verify objective requirements such as tests and builds. A mentor or another developer reviews correctness, maintainability, security, and requirement compliance. When feedback is addressed and the work is approved, it can be merged and released.

## From Issue to Pull Request

```text
Mentor creates an Issue
→ Intern reads the requirements and prerequisites
→ Intern creates a username-based task branch
→ Intern implements and tests the task
→ Intern commits and pushes the branch to a fork
→ Intern opens a Pull Request
→ GitHub Actions run
→ Mentor reviews the work
→ Intern addresses review feedback
→ Mentor approves the Pull Request
→ Pull Request is merged
→ Linked Issue is closed
```

The curriculum task ID, GitHub Issue number, and Pull Request number are different identifiers. For example, `ORI-001`, Issue `#3`, and Pull Request `#4` can refer to the same piece of work.

## Normal Case

For a login feature, the normal case is a user entering a valid email and password. The backend verifies the credentials, creates a secure session, and returns a successful response. The application then displays the authenticated page.

## Edge Case

The user might enter an email with uppercase letters or spaces around it. The team must decide whether the application should normalize the email before authentication. The expected behavior should be documented and tested consistently.

## Failure Case

The user might enter an incorrect password, or the database might be temporarily unavailable. The application should handle the failure safely and display a useful message without exposing passwords, database details, or stack traces.

## Tradeoff or Alternative

One common tradeoff is delivery speed versus test coverage. Releasing with minimal testing is faster but increases the risk of defects. Waiting to test every imaginable scenario can delay useful work. A practical approach is to test the important normal, edge, and failure cases first, then add coverage according to user impact, security risk, and feature complexity.

## Commands Used

```bash
git status
git branch --show-current
npm run validate
git diff
```

## Result

I completed the ORI-001 learning document, reviewed its Markdown structure, and explained software development, team roles, the Issue-to-PR workflow, example behaviors, and an engineering tradeoff.

## AI Usage

- AI used: Yes
- Tools used: GitHub Copilot and OpenAI Codex
- Purpose: Improve the structure, clarity, grammar, and completeness of this orientation document.
- What AI helped with: Explanations, examples, role descriptions, and document organization.
- What I personally implemented: I identified the task requirements, reviewed the content, and followed the GitHub workflow.
- What I changed from AI output: I checked the final document against the assigned task and retained the relevant material.
- How I verified the result: I reviewed every section, checked the Markdown structure, and ran `npm run validate`.
- Can I explain this submission?: Yes

## What I Learned

I learned that software development is a collaborative lifecycle rather than only a coding activity. Different roles contribute different knowledge, and clear communication helps a team avoid incorrect assumptions. I also learned how Issues, branches, commits, Pull Requests, automated checks, and reviews work together in a professional engineering workflow.
