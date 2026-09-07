# Intern Workbench

**v0.5.0 — public preview.** A GitHub-based internship framework that helps mentors assign meaningful practice and review interns' work.

[Start here](START-HERE.md) · [Intern onboarding](ONBOARDING.md) · [Mentor setup](MENTOR-GUIDE.md) · [Starter route](tracks/starter.md)

## What you can use today

- 18 active tasks with concrete deliverables across orientation, Git, HTML, CSS, JavaScript, Node HTTP, testing, debugging, security, review, documentation, and capstone planning.
- Six runnable JavaScript/HTTP exercise contracts and an intentionally flawed review fixture.
- Username-separated submission folders and a helper that prepares tasks without overwriting existing work.
- Issues, PR templates, mentor review, and objective CI.
- 188 draft curriculum outlines preserved under their original IDs for future development.

The React, Next.js, database, authentication, Docker, and other advanced outlines are **not complete runnable tracks**. The current capstone task is a planning exercise, not a shipped full-stack project.

## How it works

Company creates a training copy → mentor assigns an active task → intern forks/clones → implements and tests → opens PR → mentor reviews → intern revises → mentor merges.

Company training happens in the company's repository. Framework improvements come back here. Do not send routine learner answers or private assessments to this public upstream.

## Quick check

Install Node 22 or 24, then from the repository root:

    npm ci
    npm run validate
    npm test
    npm run workbench -- list

An intern starts at [ONBOARDING.md](ONBOARDING.md), not the entire catalogue.

## What validation means

Framework checks verify metadata, prerequisite graphs, task contracts, and local file links. Submission checks run exercise tests where provided and inspect evidence structure. Neither proves understanding, accessibility, security, or mentor approval. The mentor makes those judgments.

AI use must be disclosed and comply with the assigned task policy. The product has no AI detector. [AI policy](AI-USAGE.md)

## Release scope and evidence

The v0.5 [release notes](docs/releases/v0.5.md) describe implementation, automated verification, and remaining gaps. Previous two-account GitHub simulations tested the collaboration flow with AI assistance; they do not demonstrate independent learner outcomes or reduced mentor time.

This is a structured internship framework, not a replacement for engineering experience. [Contribute](CONTRIBUTING.md) · [MIT license](LICENSE)

