# TEST-002 exercise contract

Write regression tests against a stated function contract.

1. Implement clamp(value,min,max) in solution.mjs and create solution.test.mjs using node:test and node:assert/strict.
2. Return value bounded inclusively by min/max. Reject non-finite numbers and min greater than max with TypeError.
3. Test below, above, on both boundaries, within range, equal bounds, NaN, Infinity, and reversed bounds.

## Completion evidence

- The tests run using node --test solution.test.mjs.
- Temporarily replacing clamp with a constant causes a failure; revert that experiment before submission.
- At least one test proves rejection behavior, not only happy-path results.

## Start and check

From the repository root, replace octocat with your username:

    npm run workbench -- start TEST-002 octocat
    npm run workbench -- check TEST-002 octocat

The starter is intentionally incomplete. README section checks only confirm evidence is present; a mentor evaluates its truth and quality. Copy-safe username examples are for explanation, not automatic identity detection.

## Reference

[Node: test runner](https://nodejs.org/docs/latest-v22.x/api/test.html)
