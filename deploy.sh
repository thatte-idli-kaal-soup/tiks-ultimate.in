#!/bin/bash
set -e

PUBLIC_DIR="public"

if [ -z "${GITHUB_TOKEN}" ]
then
    GIT_URL=$(git remote get-url origin)
else
    GIT_URL="https://github.com/thatte-idli-kaal-soup/thatteidlikaalsoup.team.git"
    GIT_URL=$(echo $GIT_URL|sed -e s/github.com/thatte-idli-kaal-soup:"${GITHUB_TOKEN}"@github.com/g)
fi

# Build the site
pushd $(dirname $0)
rm -rf "${PUBLIC_DIR}"
hugo

# Push to GitHub
pushd "${PUBLIC_DIR}"
git init
git config user.email "punchagan@muse-amuse.in"
git config user.name "TravisCI auto commit"
git add .
git commit -m "Deploy to GitHub Pages"
git push --force --quiet "${GIT_URL}" master:gh-pages
popd

popd
