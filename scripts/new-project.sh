#!/bin/bash

# Create a new project
# Usage: ./scripts/new-project.sh "my-project-slug" "My Project Title"

if [ -z "$1" ]; then
  echo "Usage: $0 <slug> [title]"
  echo "Example: $0 data-pipeline 'Real-Time Data Pipeline'"
  exit 1
fi

SLUG="$1"
TITLE="${2:-$SLUG}"
DATE=$(date +%Y-%m-%d)
PROJECT_DIR="src/content/project/${SLUG}"

if [ -d "$PROJECT_DIR" ]; then
  echo "Error: Project directory already exists: $PROJECT_DIR"
  exit 1
fi

mkdir -p "$PROJECT_DIR"

cat > "${PROJECT_DIR}/index.mdx" << EOF
---
title: "${TITLE}"
description: "Add your project description here."
publishDate: ${DATE}
noHero: true
draft: true
links:
  - label: GitHub
    url: https://github.com/JeffWilliams2/your-repo
    icon: mdi:github
---

## Overview

Describe your project...

## Technologies

- Technology 1
- Technology 2

## Features

- Feature 1
- Feature 2

## Architecture

Explain the architecture...
EOF

echo "✓ Created new project: ${PROJECT_DIR}/index.mdx"
echo ""
echo "Next steps:"
echo "  1. Edit the file to add your content"
echo "  2. Update the GitHub link"
echo "  3. Set draft: false when ready to publish"
