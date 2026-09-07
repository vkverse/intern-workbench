# DEBUG-004 exercise contract

Diagnose a cart total that ignores quantities.

1. Start from the supplied buggy cartTotal function in solution.mjs. Reproduce a cart with unit price 1250 cents and quantity 3 returning 1250 instead of 3750.
2. Fix the implementation to sum priceCents * quantity for all items; empty carts return zero. Reject negative/non-integer prices or quantities with TypeError.
3. Write reproduction, hypothesis, root cause, fix, verification, and prevention sections in README.md.

## Completion evidence

- Quantity and multi-item regression tests pass.
- Zero quantity contributes zero; invalid values throw.
- The investigation explains the original defect and why the fix prevents recurrence.

## Start and check

From the repository root, replace octocat with your username:

    npm run workbench -- start DEBUG-004 octocat
    npm run workbench -- check DEBUG-004 octocat

The starter is intentionally incomplete. README section checks only confirm evidence is present; a mentor evaluates its truth and quality. Copy-safe username examples are for explanation, not automatic identity detection.

## Reference

[Official documentation](https://nodejs.org/docs/latest-v22.x/api/)
