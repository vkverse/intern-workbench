# Recover a direct clone without losing work

You can create branches and commits in a direct clone, but cannot push upstream without write access. Keep your local work.

1. On GitHub, fork the mentor repository into your own account.
2. Run git remote -v and inspect the current remotes.
3. If origin is the mentor repository and upstream does not exist, run:

    git remote rename origin upstream
    git remote add origin https://github.com/YOUR-USERNAME/TRAINING-REPO.git

Replace the owner and repository names with your actual fork. If upstream already exists, inspect it and update origin with git remote set-url instead of adding a duplicate.

4. On the existing task branch, push:

    git push -u origin HEAD

Open a PR with company/main as base and your fork branch as head. No reclone, reset, or lost commit is needed.

[GitHub fork workflow](https://docs.github.com/en/pull-requests/how-tos/work-with-forks)
