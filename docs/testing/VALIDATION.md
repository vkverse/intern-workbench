# Validation and its limits

    npm ci
    npm run validate
    npm test

Framework validation checks task metadata, ID/filename agreement, dependency existence/cycles, active task exercise contracts, required sections, local Markdown file links and catalogue consistency. It normalizes Windows and Unix line endings and ignores dependency/build/Git folders.

    npm run workbench -- check ORI-001 octocat

Replace octocat. This checks that evidence headings contain text and runs available exercise contracts. HTML checks are intentionally basic; manual keyboard, screen-size and zoom checks remain required.

CI additionally runs npm run check:submissions to check committed submissions for active tasks. Historical notes from the earlier pilot are outside that convention and retained only as historical data. CI runs submitted code in disposable hosted runners with read-only permissions. Do not run unreviewed submission code on a privileged local machine.

Green checks do not measure understanding, truthfulness, AI authorship, accessibility conformance, architecture, or developer readiness.

