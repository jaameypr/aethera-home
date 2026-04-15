#!/bin/bash
set -e

echo "→ Building and starting..."
docker compose up -d --build

echo "✓ Running. Logs: docker compose logs -f"
