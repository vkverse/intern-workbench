# Development Workflow

See [ONBOARDING](ONBOARDING.md) for fork/clone commands and
[MENTOR-GUIDE](MENTOR-GUIDE.md) for training-repository setup.
Use `submissions/<github-username>/<TASK-ID>/` for active v0.5 assignments.

## Issue to merge

1. Mentor creates an Issue titled `[TASK-ID] Task title` and assigns it.
2. Intern checks prerequisites, pulls the default branch, and creates `task/<github-username>/<task-id>-<slug>` so ownership is visible and parallel attempts do not collide.
3. Intern implements in small commits, runs focused checks, and keeps the diff scoped.
4. Intern opens a non-draft PR only when the template and evidence are complete.
5. CI validates objective properties. A green check does not mean the work is approved.
6. Mentor reviews requirements, reasoning, risks, tests, maintainability, and understanding.
7. Intern pushes fixes to the same branch and responds to each thread with evidence.
8. Mentor approves and merges; the linked Issue closes through `Closes #...`.

Never place an Issue number in curriculum metadata. Task IDs are stable; Issue and PR numbers are repository-local records.

