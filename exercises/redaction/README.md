# SEC-006 exercise contract

Redact credential fields before recording logs.

1. Implement redact(record) in solution.mjs. Replace values of password, token, and authorization keys with [REDACTED], case-insensitively.
2. Recurse into JSON objects and arrays without mutating the input; preserve safe fields and null values.
3. Document that key-based redaction cannot find secrets hidden in arbitrary message strings; use synthetic data only.

## Completion evidence

- Nested objects, arrays, uppercase key names, and null values are handled.
- Input remains unchanged and safe values are preserved.
- No actual credential is used in the exercise or evidence.

## Start and check

From the repository root, replace octocat with your username:

    npm run workbench -- start SEC-006 octocat
    npm run workbench -- check SEC-006 octocat

The starter is intentionally incomplete. README section checks only confirm evidence is present; a mentor evaluates its truth and quality. Copy-safe username examples are for explanation, not automatic identity detection.

## Reference

[OWASP: logging and data to exclude](https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html)
