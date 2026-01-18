#!/bin/bash

# Publish a draft post or project
# Usage: ./scripts/publish.sh src/content/post/2025/my-post/index.mdx

if [ -z "$1" ]; then
  echo "Usage: $0 <path-to-index.mdx>"
  echo "Example: $0 src/content/post/2025/kubernetes-basics/index.mdx"
  exit 1
fi

FILE="$1"

if [ ! -f "$FILE" ]; then
  echo "Error: File not found: $FILE"
  exit 1
fi

# Change draft: true to draft: false
sed -i '' 's/^draft: true/draft: false/' "$FILE"

echo "✓ Published: $FILE"
grep "^draft:" "$FILE"
