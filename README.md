# Website for TIKS

## Install

Make sure that you have the Gatsby CLI program installed:

```sh
npm install --global gatsby-cli
```

```sh
git clone <this-repository>
```

Then you can run it by:

```sh
cd <this-repository>
npm install
gatsby develop
```

## How does the site get published?

We use [GitHub
Actions](https://github.com/thatte-idli-kaal-soup/thatteidlikaalsoup.team/blob/master/.github/workflows/main.yml)
to build and publish the site.

## How does the Instagram feed work?

We use a cron job that runs on GitHub Actions to update our Instagram feed. We
use a [instagram-scraper](https://github.com/rarcega/instagram-scraper) to
scrape our latest posts, and write them to a .json file. The cron job runs twice
a day at 12 o clock.

