# Contributing

Start with an Issue describing the learner or mentor problem. Create a focused branch and PR with actual check results, limitations, and AI disclosure. Routine internship answers belong in the adopting company's training repository, not this public framework.

    npm ci
    npm run validate
    npm test

Task changes follow [authoring guide](TASK-AUTHORING-GUIDE.md). Allocate a new ID without reusing or renumbering an existing one. Draft tasks become active only when requirements, starter dependencies, exercise contracts, run/test instructions and human acceptance criteria are ready.

Run npm run catalogue:write after metadata changes. Do not check in node_modules, real secrets, learner assessments, or private company information.

Follow [Code of Conduct](CODE-OF-CONDUCT.md) and [Security policy](SECURITY.md). Public reference implementations exist under tests for maintainer verification; the framework makes no anti-cheating claim.

