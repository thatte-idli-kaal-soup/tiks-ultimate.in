#!/bin/bash
set -e

GIT_URL="https://punchagan:"${GITHUB_TOKEN}"@github.com/thatte-idli-kaal-soup/thatteidlikaalsoup.team.git"

# Push to GitHub
git add content/
git commit -m "Updating instagram feed from TravisCI " \
    --author "TIKS Travis Bot <tiks.india.ultimate+travisci@gmail.com>"
git push --quiet "${GIT_URL}" HEAD:master
