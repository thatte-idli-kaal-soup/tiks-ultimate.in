#!/bin/bash
set -e

PUBLIC_DIR="public"

fetch_data () {
    # Rules
    curl -L "${RULES_2022}"  --output data/rules-2022.docx
    pandoc data/rules-2022.docx -o data/rules-2022.md --shift-heading-level-by=1
    # Teams
    curl -L "${TEAMS_2022}"  --output data/teams-2022.csv
    pandoc data/teams-2022.csv -o data/teams-2022.md -t gfm
    # Schedule
    curl -L "${SCHEDULE_2022}"  --output data/schedule-2022.csv
    pandoc data/schedule-2022.csv -o data/schedule-2022.md -t gfm
    # Points
    curl -L "${POINTS_2022}"  --output data/points-2022.csv
    pandoc data/points-2022.csv -o data/points-2022.md -t gfm
    # Scores
    curl -L "${SCORES_2022}"  --output data/scores-2022.csv
    pandoc data/scores-2022.csv -o data/scores-2022.md -t gfm
}

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
    git branch -M main
    git config user.email "punchagan+ghactions@muse-amuse.in"
    git config user.name "punchagan (gh-actions)"
    git add .
    git commit -m "Deploy to GitHub Pages"
    git push --force --quiet "${GIT_URL}" main:gh-pages
    popd
}

# Build the site
build () {
    rm -rf "${PUBLIC_DIR}"
    hugo
}

pushd $(dirname $0)
fetch_data
build
deploy
popd
