# GIT-003 exercise contract

Use the staging area to control a commit.

1. Create notes.txt with three lines describing what changed, why, and how it was checked.
2. Stage notes.txt, then edit its final line without staging again. Record how git diff differs from git diff --cached.
3. Stage the intended final version, inspect git diff --cached, and make one focused commit. Record its short hash in README.md after committing.

## Completion evidence

- Evidence distinguishes unstaged, staged, and committed changes.
- No unrelated files are staged.
- The final PR includes notes.txt and the explanation of the staging experiment.

## Start and check

From the repository root, replace octocat with your username:

    npm run workbench -- start GIT-003 octocat
    npm run workbench -- check GIT-003 octocat

The starter is intentionally incomplete. README section checks only confirm evidence is present; a mentor evaluates its truth and quality. Copy-safe username examples are for explanation, not automatic identity detection.

## Reference

[Official documentation](https://git-scm.com/docs)
