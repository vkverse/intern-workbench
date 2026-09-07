# GIT-006 exercise contract

Resolve two incompatible edits without losing intent.

1. Create a disposable local Git repository under scratch/git-conflict; do not nest it in submissions.
2. Commit greeting.txt on main, make one edit on branch left and a different edit to the same line on branch right. Merge left into right.
3. Record the conflict markers, resolve the file to retain both intended messages, stage it, and complete the merge. Put only a transcript and final file text in README.md.

## Completion evidence

- A genuine conflict is reproduced and its cause explained.
- The resolution preserves both messages and contains no conflict markers.
- The scratch repository and its .git directory are not included in the PR.

## Start and check

From the repository root, replace octocat with your username:

    npm run workbench -- start GIT-006 octocat
    npm run workbench -- check GIT-006 octocat

The starter is intentionally incomplete. README section checks only confirm evidence is present; a mentor evaluates its truth and quality. Copy-safe username examples are for explanation, not automatic identity detection.

## Reference

[Official documentation](https://git-scm.com/docs)
