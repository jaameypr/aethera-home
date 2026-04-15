#!/bin/bash
set -e

BRANCH=$(git rev-parse --abbrev-ref HEAD)

echo "→ Fetching origin..."
git fetch origin

echo "→ Hard resetting to origin/$BRANCH..."
git reset --hard "origin/$BRANCH"

echo "✓ Up to date with origin/$BRANCH"
