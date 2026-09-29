#!/usr/bin/env bash
# Checks the toolchain entry points that build, lint and tests do not cover.
set -euo pipefail

cd "$(dirname "$0")/.."

echo "› vp config"
pnpm vp config --no-agent

echo "› build:content"
pnpm run build:content

echo "› build:progress (README.md must stay in sync)"
pnpm run build:progress
git diff --exit-code -- README.md

echo "› dev server"
port=5391
log=$(mktemp)
pnpm vp dev --port "$port" --strictPort >"$log" 2>&1 &
dev_pid=$!
trap 'kill "$dev_pid" 2>/dev/null || true; pkill -P "$dev_pid" 2>/dev/null || true' EXIT
for _ in $(seq 1 60); do
  if curl -fsS -o /dev/null "http://localhost:$port/"; then
    echo "dev server answered on port $port"
    exit 0
  fi
  sleep 1
done
cat "$log"
echo "dev server did not answer on port $port" >&2
exit 1
