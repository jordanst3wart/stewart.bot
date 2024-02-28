#!/bin/bash

set -e

yarn build

# copy all the *.html files to just file
# for file in out/*.html; do cp "$file" out/$(basename "$file"); done

cd out



# copy to s3 bucket
aws s3 cp . s3://stewart.bot/ --recursive --profile personal --exclude **/.DS_Store


# aws cloudfront create-invalidation --distribution-id E2WLKPSIG60UDN --paths "/*" --profile personal

# TODO add .html to link... :\