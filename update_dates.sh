#!/bin/bash

BLOG_DIR="/Users/jwilliams/Downloads/portfolio-master/src/content/blog"

# Array of dates from August 1 to September 20, 2025
declare -a dates=(
    "2025-09-20"
    "2025-09-18"
    "2025-09-15"
    "2025-09-12"
    "2025-09-10"
    "2025-09-08"
    "2025-09-05"
    "2025-09-03"
    "2025-09-01"
    "2025-08-29"
    "2025-08-27"
    "2025-08-25"
    "2025-08-22"
    "2025-08-20"
    "2025-08-18"
    "2025-08-15"
    "2025-08-13"
    "2025-08-10"
    "2025-08-08"
    "2025-08-06"
    "2025-08-04"
    "2025-08-02"
    "2025-08-01"
)

# Function to update dates in a file
update_dates() {
    local file=$1
    local date=$2
    local update_date="2025-09-19"  # Most recent update date
    
    # Update the date and updatedDate fields
    sed -i '' "s/date: .*/date: $date/" "$file"
    if grep -q "updatedDate:" "$file"; then
        sed -i '' "s/updatedDate: .*/updatedDate: $update_date/" "$file"
    fi
}

# Get all index.md and index.mdx files
find "$BLOG_DIR" -type f \( -name "index.md" -o -name "index.mdx" \) | while read -r file; do
    # Get a random date from our array
    date=${dates[$RANDOM % ${#dates[@]}]}
    update_dates "$file" "$date"
done