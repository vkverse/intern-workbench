# NODE-003 exercise contract

Serve a small read-only HTTP API.

1. Implement handler(req,res) in solution.mjs using Node HTTP. GET /health returns status 200 and {status:"ok"}; GET /api/items returns 200 and {items:[]}.
2. Unknown paths return 404 with {error:"Not found"}; unsupported methods return 405 with {error:"Method not allowed"}. All responses use application/json.
3. Use the provided localhost runner; ensure responses end and the server closes cleanly.

## Completion evidence

- Endpoint contract passes automated real HTTP requests.
- Response status and content type are correct, including error paths.
- No database or authentication is needed for this isolated HTTP exercise.

## Start and check

From the repository root, replace octocat with your username:

    npm run workbench -- start NODE-003 octocat
    npm run workbench -- check NODE-003 octocat

The starter is intentionally incomplete. README section checks only confirm evidence is present; a mentor evaluates its truth and quality. Copy-safe username examples are for explanation, not automatic identity detection.

## Reference

[Node: HTTP API](https://nodejs.org/docs/latest-v22.x/api/http.html)

## Run the server

    node scripts/serve-api.mjs octocat

Open http://127.0.0.1:3001/health in your browser. Ctrl+C stops the server. If port 3001 is occupied, stop the process you own or set PORT to another free port. Never stop unrelated services.
