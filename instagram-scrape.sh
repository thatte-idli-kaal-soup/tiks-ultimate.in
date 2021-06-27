#!/bin/bash
set -e

pushd $(dirname $0)
source .envrc
instagram-scraper --latest --media-metadata --media-types='none' -d content tiks_ultimate
git add content/
git commit -m "Updating instagram feed in a cron" \
    --author "TIKS Travis Bot <tiks.india.ultimate+cronjob@gmail.com>"
git push origin master
