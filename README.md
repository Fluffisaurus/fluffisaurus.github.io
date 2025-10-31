# My personal website v2.0

Hi, this is version 2.0 of my website redesigned and reimagined in mid-late 2025. You can visit it [here](fluffisaurus.github.io).

The repo is public to showcase my coding and design philosophies. Some parts may be rough around the edges as they may still be in development. I do my best to adhere to industry standards and apply everything I've learned from my time in the industry.

If this website inspires you at all - great!!! Free to fork or utilize snippets of code from this repo, but please follow the AGPL-3.0 license!

## Required env vars in `.env` file

| Environment Variable         | Use case                                                                       |
| ---------------------------- | ------------------------------------------------------------------------------ |
| `CLOUDINARY_CLOUD_NAME`      | used when calling Cloudinary to fetch images                                   |
| `S3_BUCKET_URL`              | used in `deploy.js` script to upload `./build` folder to specified S3 bucket   |
| `CLOUDFRONT_DISTRIBUTION_ID` | used in `deploy.js` script to invalidate cache for the CloudFront distribution |
