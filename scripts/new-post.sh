#!/bin/bash

# Create a new blog post
# Usage: ./scripts/new-post.sh "my-post-slug" "My Post Title"

if [ -z "$1" ]; then
  echo "Usage: $0 <slug> [title]"
  echo "Example: $0 kubernetes-basics 'Getting Started with Kubernetes'"
  exit 1
fi

SLUG="$1"
TITLE="${2:-$SLUG}"
YEAR=$(date +%Y)
DATE=$(date +%Y-%m-%d)
POST_DIR="src/content/post/${YEAR}/${SLUG}"

if [ -d "$POST_DIR" ]; then
  echo "Error: Post directory already exists: $POST_DIR"
  exit 1
fi

mkdir -p "$POST_DIR"

cat > "${POST_DIR}/index.mdx" << EOF
---
title: "${TITLE}"
description: "Add your description here."
publishDate: ${DATE}
tags:
  - data-engineering
category: data-engineering
toc: true
noHero: true
draft: true
---

## Introduction

Start writing your post here...

## Section 1

Add your content...

## Conclusion

Wrap up your post...
EOF

echo "✓ Created new post: ${POST_DIR}/index.mdx"
echo ""
echo "Next steps:"
echo "  1. Edit the file to add your content"
echo "  2. Update tags and category"
echo "  3. Set draft: false when ready to publish"
