#!/bin/bash
set -e

SCRIPT="$(realpath "$0")"
BRANCH=$(git rev-parse --abbrev-ref HEAD)
IMAGE="aethera-home"
CONTAINER="aethera-home"

# ── Self-update ────────────────────────────────────────────────────────────────
echo "→ Checking for updates on $BRANCH..."
git fetch origin

LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse "origin/$BRANCH")

if [ "$LOCAL" != "$REMOTE" ]; then
  echo "→ Updates found, applying..."
  git reset --hard "origin/$BRANCH"
  echo "→ Re-executing updated script..."
  exec "$SCRIPT" "$@"
fi

echo "✓ Already up to date."

# ── Docker build + run ─────────────────────────────────────────────────────────
echo "→ Building image..."
docker build -t "$IMAGE" .

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
