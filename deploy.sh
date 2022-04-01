#!/bin/bash
set -e

PUBLIC_DIR="public"

# Push to GitHub
deploy () {
    if [ -z "${GITHUB_TOKEN}" ]
    then
        GIT_URL=$(git remote get-url origin)
    else
        GIT_URL="https://github.com/thatte-idli-kaal-soup/thatteidlikaalsoup.team.git"
        GIT_URL=$(echo $GIT_URL|sed -e s/github.com/punchagan:"${GITHUB_TOKEN}"@github.com/g)
    fi
    pushd "${PUBLIC_DIR}"
    git init
    git config user.email "punchagan+ghactions@muse-amuse.in"
    git config user.name "punchagan (gh-actions)"
    git add .
    git commit -m "Deploy to GitHub Pages"
    git push --force --quiet "${GIT_URL}" master:gh-pages
    popd
}

# Build the site
build () {
    rm -rf "${PUBLIC_DIR}"
    hugo
}

pushd $(dirname $0)
build
deploy
popd
