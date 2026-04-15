#!/bin/bash
set -e

IMAGE="aethera-home"
CONTAINER="aethera-home"

echo "→ Building image..."
docker build -t "$IMAGE" .

# Stop existing container if running
if docker ps -q -f name="$CONTAINER" | grep -q .; then
  echo "→ Stopping existing container..."
  docker stop "$CONTAINER"
fi

echo "→ Starting container in background..."
docker run -d \
  --name "$CONTAINER" \
  --restart unless-stopped \
  -p 3000:3000 \
  $([ -f .env ] && echo "--env-file .env") \
  "$IMAGE"

echo "✓ Running. Logs: docker logs -f $CONTAINER"
