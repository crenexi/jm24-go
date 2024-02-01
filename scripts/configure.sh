#!/bin/bash

# Load .env file
if [ ! -f .env ]; then
  echo ".env file not found"
  exit 1
fi
source .env

# Ensure all necessary CodeArtifact variables are set
if [ -z "$CODEARTIFACT_REGION" ] || [ -z "$CODEARTIFACT_OWNER" ] || [ -z "$CODEARTIFACT_DOMAIN" ] || [ -z "$CODEARTIFACT_REPO" ]; then
  echo "Error: One or more CodeArtifact variables are not set."
  exit 1
fi

# Set local variables for readability
region=$CODEARTIFACT_REGION
owner=$CODEARTIFACT_OWNER
domain=$CODEARTIFACT_DOMAIN
repo=$CODEARTIFACT_REPO

# Clear the global registry
npm config delete registry

# Connect with package repos
echo "Connecting with crenexi CodeArtifact repository..."
aws --region $region codeartifact login --tool npm --domain-owner $owner --domain $domain --repository $repo
