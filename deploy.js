#!/usr/bin/env node
/* eslint-disable */

const shell = require("shelljs");

const config = {
  deploy: {
    bucketUrl: process.env.S3_BUCKET_URL,
    cloudFrontDistributionId: process.env.CLOUDFRONT_DISTRIBUTION_ID,
    cacheControlMaxAge: 31536000,
  },
};
console.log("Deployment Config:", config.deploy);

const tryShell = (command) => {
  shell.exec(command);
  if (shell.error()) {
    console.error("Error when executing deploy.js: ", shell.error());
    process.exit(1);
  }
};

// upload
console.log("Uploading and syncing content:---------->");
tryShell(`aws s3 sync --delete ./build ${config.deploy.bucketUrl}`);

console.log("Invalidating CloudFront cache:---------->");
// invalidate cloudfront cache
tryShell(
  `aws configure set preview.cloudfront true && aws cloudfront create-invalidation --distribution-id ${config.deploy.cloudFrontDistributionId} --paths "/*"`
);
