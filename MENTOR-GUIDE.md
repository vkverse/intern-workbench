# Mentor setup and review

## Set up a training repository

1. Create a company-controlled copy of the framework. For public pilots a fork is simplest; use an organization/private copy when training work or assessments must be private. Public forks are public.
2. Edit [company profile](company/PROFILE.yml) and [standards](company/STANDARDS.md). Agree an AI policy and reviewer with the intern.
3. Replace .github/CODEOWNERS with actual maintainers with write access. CODEOWNERS identifies reviewers; it does not itself enforce approval.
4. Enable Issues and Actions, run validation, then protect main with required PRs, review and the exact observed validate check name. Block deletion and force pushes.
5. Inspect who can push and bypass rules. For public fork-only pilots, ordinary interns do not need collaborator write access.
6. Check the complete route with a second account before inviting a cohort.

With one owner and required reviews, owner-authored PRs cannot be self-approved. Plan a second qualified maintainer or a documented administrative exception; do not silently weaken the training rule.

## Assign one task

Start with ORI-001, then use [starter route](tracks/starter.md). Select active tasks only. Preview an issue body locally:

    npm run workbench -- issue ORI-001

Copy the relevant requirements into the Learning task Issue form. Set title, task link, intern mention/assignee, expected evidence, review contact, time budget, and AI policy. Confirm expectations before work begins. A GitHub Issue number is not a curriculum ID.

Issue forms do not create missing labels. Create the labels used by the templates or remove their defaults. With a personal-account public repository, a mention may be preferable to granting collaborator write access solely to assign an Issue.

## Review

Read the specification and the diff. Confirm that only the intern's submission changed unless framework changes were agreed. Check automated evidence, then ask the intern to explain an example and handle a changed requirement. Leave specific feedback; request changes only for actual unmet requirements.

For fork workflows awaiting permission, inspect the submitted code/workflow before approving its run. Use hosted runners with no secrets and read-only token permissions for untrusted contributions. Do not run arbitrary fork code on company self-hosted runners.

The v0.5 CI validates framework integrity, framework tests, and current submissions. Submission execution is ordinary code execution; review the diff before running it locally.

Use [evaluation rubric](docs/mentor/EVALUATION-RUBRIC.md) to record observations privately. Passing prose-structure checks does not prove that an answer is accurate or original.

## Close the loop

Merge after requirements, checks and review are satisfied. Check that the intended Issue closed. Ask the intern to sync their fork before the next task. Do not promise automatic deletion of a contributor's fork branch.

Framework improvements may be proposed upstream. Intern answers and assessments belong in the company training copy, with consent and an appropriate visibility policy.

