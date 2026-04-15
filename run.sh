#!/bin/bash
set -e

IMAGE="aethera-home"

echo "→ Building image..."
docker build -t "$IMAGE" .

echo "→ Starting container..."
docker run --rm \
  -p 3000:3000 \
  $([ -f .env ] && echo "--env-file .env") \
  "$IMAGE"
