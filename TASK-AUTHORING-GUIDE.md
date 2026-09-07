# Task authoring

Metadata uses a deliberately restricted YAML subset: unquoted one-line scalar values and indented string lists. See existing active tasks. Supported statuses: draft, active, deprecated.

Keep permanent phase IDs. A task ID is never a GitHub Issue or PR number. Do not reuse IDs or renumber tasks when changing a route.

Before activating a task:

1. Write a specific product behavior or investigation with inputs, expected outputs, failure cases and restrictions.
2. Add exercises/EXERCISE/README.md and any starter files. Add exercise: EXERCISE to task metadata.
3. Give exact preparation, execution and checking commands. Preparation must not provide a finished learner solution.
4. Link prerequisites to active tasks; allow independent branches in the learning route.
5. Supply observable acceptance criteria and mentor questions that exercise understanding.
6. Use task/<github-username>/<task-id>-<slug> and submissions/<github-username>/TASK-ID.
7. Explain objective checks separately from manual review.
8. Run npm run catalogue:write, npm run validate and npm test.

Add tests with the Node test runner when behavior can be checked objectively. Include negative cases that would catch the original bug. Existing maintainer contract regression tests demonstrate the pattern.

Use [canonical headings](templates/task/TASK-TEMPLATE.md), [AI policy](AI-USAGE.md), and [starter route](tracks/starter.md). Deprecate an ID without deleting its history.

