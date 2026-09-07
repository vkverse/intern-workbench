# JS-004 exercise contract

Summarize order data without mutating the input.

1. Implement summarizeOrders(orders) in solution.mjs; orders contain id, status, and amount in integer cents.
2. Return {count,totalCents} for paid orders only. Empty input returns zeros. Reject any record with a negative or non-integer amount using TypeError.
3. Do not mutate the array or its records; run the supplied contract tests.

## Completion evidence

- Mixed paid/pending orders produce the correct count and total.
- Frozen input works without mutation.
- Invalid amounts throw, even on unpaid records.

## Start and check

From the repository root, replace octocat with your username:

    npm run workbench -- start JS-004 octocat
    npm run workbench -- check JS-004 octocat

The starter is intentionally incomplete. README section checks only confirm evidence is present; a mentor evaluates its truth and quality. Copy-safe username examples are for explanation, not automatic identity detection.

## Reference

[Official documentation](https://nodejs.org/docs/latest-v22.x/api/)
