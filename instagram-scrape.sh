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
    instagram-scraper --media-metadata --media-types='none' -d content tiks_ultimate
    download_thumbnails
    git add content/
    git add static/thumbnails/
    git commit -m "Updating instagram feed in a cron" \
        --author "TIKS Cron Job <tiks.india.ultimate+cronjob@gmail.com>"
}


pushd $(dirname $0)
source .envrc
fetch_instagram
git pull --rebase origin master
git push origin master
