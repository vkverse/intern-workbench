# HTML-004 exercise contract

Build an accessible workshop registration form.

1. Create index.html with name and email inputs, a session select, consent checkbox, and submit button.
2. Connect each control to a visible label; require name, valid email, a session, and consent using native HTML validation.
3. Prevent submission with a small script and show an on-page confirmation; this local demonstration must not send personal data anywhere.

## Completion evidence

- Keyboard users can reach and activate every control.
- Blank required inputs and malformed email are rejected by the browser.
- A valid fictional registration shows confirmation without a network request.

## Start and check

From the repository root, replace octocat with your username:

    npm run workbench -- start HTML-004 octocat
    npm run workbench -- check HTML-004 octocat

The starter is intentionally incomplete. README section checks only confirm evidence is present; a mentor evaluates its truth and quality. Copy-safe username examples are for explanation, not automatic identity detection.

## Reference

[Official documentation](https://developer.mozilla.org/en-US/docs/Learn_web_development)
