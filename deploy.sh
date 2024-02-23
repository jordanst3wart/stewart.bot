#!/bin/bash

set -e

yarn build

cd out

# copy to s3 bucket
aws s3 cp . s3://stewart.bot/ --recursive --profile personal


# aws cloudfront create-invalidation --distribution-id E2WLKPSIG60UDN --paths "/*" --profile personal