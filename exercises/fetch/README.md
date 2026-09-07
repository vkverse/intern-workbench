# JS-010 exercise contract

Load API data with explicit failure behavior.

1. Implement async loadItems(fetcher) in solution.mjs; call the injected fetcher once with /api/items.
2. Return the items array from a successful JSON response. Reject a non-OK response with Error containing its status.
3. Reject payloads without an items array using TypeError; let network and JSON parsing errors propagate. Do not silently turn failures into empty lists.

## Completion evidence

- Successful, empty, HTTP-error, malformed JSON, and network-error cases behave as specified.
- Tests use a fake fetcher, so no live endpoint or token is needed.
- README distinguishes HTTP failures from rejected network promises.

## Start and check

From the repository root, replace octocat with your username:

    npm run workbench -- start JS-010 octocat
    npm run workbench -- check JS-010 octocat

The starter is intentionally incomplete. README section checks only confirm evidence is present; a mentor evaluates its truth and quality. Copy-safe username examples are for explanation, not automatic identity detection.

## Reference

[Official documentation](https://nodejs.org/docs/latest-v22.x/api/)
