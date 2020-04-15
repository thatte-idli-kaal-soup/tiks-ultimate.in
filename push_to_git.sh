#!/bin/bash
set -e

GIT_URL="https://punchagan:"${GITHUB_TOKEN}"@github.com/thatte-idli-kaal-soup/thatteidlikaalsoup.team.git"

# Push to GitHub
git show master
git checkout master  # switch from detached HEAD state to master
git add content/
git commit -m "Updating instagram feed from TravisCI [skip ci]" \
    --author "punchagan (travisci) <punchagan+travis@muse-amuse.in>"
git push --quiet "${GIT_URL}" master:master
