#!/bin/bash
set -e

pushd $(dirname $0)
source .envrc
instagram-scraper --latest --media-metadata --media-types='none' -d content tiks_ultimate
git add content/
git commit -m "Updating instagram feed in a cron" \
    --author "TIKS Cron Job <tiks.india.ultimate+cronjob@gmail.com>"
git pull --rebase origin master
git push origin master
