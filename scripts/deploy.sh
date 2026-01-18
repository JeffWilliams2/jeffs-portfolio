#!/bin/bash

# Deploy changes to GitHub/Vercel
# Usage: ./scripts/deploy.sh "Commit message"

DEPLOY_DIR="$HOME/Desktop/jeffs-portfolio"
SOURCE_DIR="$(dirname "$0")/.."
MESSAGE="${1:-Update content}"

if [ ! -d "$DEPLOY_DIR" ]; then
  echo "Error: Deployment directory not found: $DEPLOY_DIR"
  exit 1
fi

echo "=== Syncing to deployment repo ==="

# Copy updated content
rm -rf "$DEPLOY_DIR/src/content"
cp -r "$SOURCE_DIR/src/content" "$DEPLOY_DIR/src/"

# Copy other key files that might have changed
cp -r "$SOURCE_DIR/src/pages" "$DEPLOY_DIR/src/" 2>/dev/null
cp -r "$SOURCE_DIR/public" "$DEPLOY_DIR/" 2>/dev/null

echo "✓ Files synced"

# Git operations
cd "$DEPLOY_DIR" || exit 1

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
