#!/bin/bash
set -e

SCRIPT="$(realpath "$0")"
BRANCH=$(git rev-parse --abbrev-ref HEAD)

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

# ── Deploy ─────────────────────────────────────────────────────────────────────
echo "→ Building and starting..."
docker compose up -d --build

echo "✓ Running. Logs: docker compose logs -f"
