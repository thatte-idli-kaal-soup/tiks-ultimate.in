#!/bin/bash
set -e

PUBLIC_DIR="public"
GIT_URL="https://github.com/punchagan/thatte-idli.git"
GIT_URL=$(echo $GIT_URL|sed -e s/github.com/punchagan:"${GITHUB_TOKEN}"@github.com/g)

# Build the site
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
