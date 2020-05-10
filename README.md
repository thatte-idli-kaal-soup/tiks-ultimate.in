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

### Additional Configuration

The repository is configured to fetch posts from our RSVP app. To configure
this, you need to set an environment variable.

```sh
export POSTS_API_URL=<RSVP_APP_URL>/api/posts
```

Replace `<RSVP_APP_URL>` with the actual URL.


## How does the Instagram feed work?

We use a cron job on Travis CI to update our Instagram feed. We use a
instagram-scraper to scrape our latest posts, and write them to a .json file.
This updated json file is committed to the repository, which triggers a build on
Netlify.
