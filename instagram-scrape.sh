#!/bin/bash
set -eu

function download_url {
    mkdir -p "static/thumbnails/"
    url="${1}"
    filename=$(basename $(echo "${url}" | cut -d ? -f 1))
    wget --quiet --continue --no-clobber "${url}" --output-document "static/thumbnails/${filename}" || true
}

function download_thumbnails {
    urls=$(jq -r '.GraphImages[].thumbnail_src' content/tiks_ultimate.json)
    for url in ${urls};
    do
        download_url ${url}
    done
}

function fetch_instagram {
    OLD_COUNT=$(jq -r '.GraphImages | length' content/tiks_ultimate.json)
    instagram-scraper --media-metadata --media-types='none' -d content tiks_ultimate
    NEW_COUNT=$(jq -r '.GraphImages | length' content/tiks_ultimate.json)
    if [ $OLD_COUNT = $NEW_COUNT ]; then
        echo "No new posts"
        git checkout  -- content/
        exit 0
    fi
    download_thumbnails
}

function update_site_repo {
    git add content/
    git add static/thumbnails/
    git commit -m "Updating instagram feed in a cron" \
        --author "TIKS Cron Job <tiks.india.ultimate+cronjob@gmail.com>"
    git pull --rebase origin master
    git push origin master
}

pushd $(dirname $0)
source .envrc
fetch_instagram
update_site_repo
