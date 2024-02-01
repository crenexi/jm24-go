#!/bin/bash

target_env=$1

# Load .env file
if [ ! -f .env ]; then
  echo ".env file not found"
  exit 1
fi
source .env

# Ensure bucket and assets URIs are supplied
if [ -z "$S3_BUCKET_URI" ] || [ -z "$S3_ASSETS_URI" ]; then
  echo "Error: S3_BUCKET_URI and/or S3_ASSETS_URI are not set."
  exit 1
fi

# Determine assets source and destination
case $target_env in
  "prod") # From stage to prod
    s3_src="${S3_ASSETS_URI}/stage"
    s3_dest="${S3_ASSETS_URI}/prod"

    ;;
  "stage") # From test to stage
    s3_src="${S3_ASSETS_URI}/test"
    s3_dest="${S3_ASSETS_URI}/stage"
    ;;
  *)
    echo "Error: target environment not specified. Must be 'prod' or 'stage'"
    exit 1
    ;;
esac

# Perform recursive copy
echo "Copying assets from \"$s3_src\" to \"$s3_dest\""
aws s3 cp "$s3_src" "$s3_dest" --recursive
