#!/bin/bash

# List all posts with their status
# Usage: ./scripts/list-posts.sh

echo "=== Blog Posts ==="
echo ""

for dir in src/content/post/*/*/; do
  if [ -f "${dir}index.mdx" ]; then
    title=$(grep "^title:" "${dir}index.mdx" | head -1 | sed 's/title: *//' | tr -d '"')
    draft=$(grep "^draft:" "${dir}index.mdx" | head -1 | sed 's/draft: *//')
    date=$(grep "^publishDate:" "${dir}index.mdx" | head -1 | sed 's/publishDate: *//')
    
    if [ "$draft" = "true" ]; then
      status="[DRAFT]"
    else
      status="[LIVE] "
    fi
    
    echo "$status $date - $title"
    echo "         $dir"
  fi
done

echo ""
echo "=== Projects ==="
echo ""

for dir in src/content/project/*/; do
  if [ -f "${dir}index.mdx" ]; then
    title=$(grep "^title:" "${dir}index.mdx" | head -1 | sed 's/title: *//' | tr -d '"')
    draft=$(grep "^draft:" "${dir}index.mdx" | head -1 | sed 's/draft: *//')
    
    if [ "$draft" = "true" ]; then
      status="[DRAFT]"
    else
      status="[LIVE] "
    fi
    
    echo "$status $title"
    echo "         $dir"
  fi
done
