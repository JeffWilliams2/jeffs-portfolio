#!/bin/bash

# Deploy changes to GitHub/Vercel
# Usage: ./scripts/deploy.sh "Commit message"

# Deploy directly from this repo
SOURCE_DIR="$(cd "$(dirname "$0")/.." && pwd)"
MESSAGE="${1:-Update content}"

cd "$SOURCE_DIR" || exit 1

echo "=== Deploying from $SOURCE_DIR ==="

git add -A
git status --short

echo ""
read -p "Commit and push with message '$MESSAGE'? (y/n) " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
  git commit -m "$MESSAGE"
  git push origin main
  echo ""
  echo "✓ Deployed! Vercel will auto-build from main branch."
else
  echo "Cancelled. Changes staged but not committed."
fi
