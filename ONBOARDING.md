# Intern onboarding

Goal: one small reviewed PR in your first working session. Ask your mentor for the company training repository URL, your Issue, and its AI policy.

## 1. Prepare your tools and fork

Install Git and Node 22 or 24. Verify:

    git --version
    node --version
    npm --version

Open the company repository in your browser while signed into your own GitHub account. Click **Fork**, select your account, and create the fork. On your fork, click **Code** and copy its HTTPS clone URL.

The commands below use fictional owner names. Replace YOUR-USERNAME, COMPANY, and TRAINING-REPO before running; use the exact repository name from your mentor.

    git clone https://github.com/YOUR-USERNAME/TRAINING-REPO.git
    cd TRAINING-REPO
    git remote add upstream https://github.com/COMPANY/TRAINING-REPO.git
    git remote -v
    npm ci
    npm run validate

origin must point to your fork; upstream must point to the company repository. A direct public clone grants no push permission. If you already cloned upstream, see [fork recovery](docs/workflow/FORK-RECOVERY.md).

GitHub CLI is optional. Your editor login, Git commit identity, and GitHub push authentication are separate. Set your repository-local commit email to a verified or GitHub noreply address if needed; never put a token in a command or remote URL.

## 2. Read your Issue and one task

Check the task ID, prerequisites, acceptance criteria, assigned reviewer, and AI policy. Open the matching active task in [CURRICULUM.md](CURRICULUM.md). Stop and ask the mentor if the task is draft or prerequisites are not complete.

## 3. Create your branch and submission

For the first task, replace octocat with your GitHub username in every command:

    git switch main
    git fetch upstream
    git merge --ff-only upstream/main
    git switch -c task/octocat/ori-001-roles
    npm run workbench -- start ORI-001 octocat

The helper creates submissions/octocat/ORI-001/README.md with five headings. Fill those headings with your own task-specific response. It will not overwrite existing work. Read the ORI-001 requirements; the helper does not answer the task for you.

If your editor has an unsaved buffer for the same file, resolve it before saving over the newly created file.

## 4. Check and submit

    npm run workbench -- check ORI-001 octocat
    npm run validate
    git status
    git add submissions/octocat/ORI-001
    git diff --cached
    git commit -m "docs: submit ORI-001 evidence"
    git push -u origin HEAD

On GitHub select Compare & pull request. Base repository = company training repository, base branch = main. Head = your fork and task branch.

Fill the PR template honestly. Link the assigned Issue using Closes #N, replacing N with the real number. Record actual checks and disclose AI assistance, even if used only for wording. A no-AI task needs mentor permission before using AI.

## 5. Respond to review and finish

If Actions waits for approval, notify the mentor and wait; do not disable checks. The mentor may request changes even when CI passes. Fix those on the same branch, re-run checks, commit, and push. Respond with what changed and what you verified.

After mentor approval and merge:

    git switch main
    git fetch upstream
    git merge --ff-only upstream/main
    git push origin main

If fast-forward fails, stop and ask for help rather than resetting or force-pushing. Keep your completed branch until sync is verified; cleanup is optional.

## Asking for help

Send the task ID, expected/actual behavior, reproduction steps, and what you tried. Redact secrets. See [help guide](docs/workflow/ASKING-FOR-HELP.md).

