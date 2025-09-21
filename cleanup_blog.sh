#!/bin/bash

# Directory containing blog posts
BLOG_DIR="/Users/jwilliams/Downloads/portfolio-master/src/content/blog"

# List of posts to keep
KEEP_POSTS=(
"sql-for-financial-analysis-beyond-basic-queries"
"building-an-options-analysis-pipeline-with-python"
"time-series-analysis-for-financial-data"
"how-to-use-pandas-for-data-analysis-in-python"
"how-to-use-machine-learning-for-price-prediction"
"how-to-use-r-for-statistical-analysis"
"modern-data-engineering-pipeline-design"
"data-engineering-best-practices-build-a-robust-pipeline"
"modern-data-stack-building-a-scalable-data-infrastructure"
"data-lakes-vs-data-warehouses-choosing-the-right-architecture"
"how-to-use-data-lakes-for-big-data-management"
"data-engineering-for-ai-building-a-robust-foundation"
"10-ways-to-optimize-your-sql-queries"
"how-to-optimize-your-database-queries-for-performance"
"10-essential-plugins-for-your-nextjs-project"
"why-you-should-use-typescript-in-your-next-project"
"building-scalable-react-applications"
"modern-frontend-development-best-practices"
"optimizing-web-performance-tips-and-tricks"
"understanding-web-accessibility-a-comprehensive-guide"
"state-management-in-modern-web-applications"
"building-responsive-layouts-with-tailwind-css"
"progressive-web-apps-the-future-of-web-development"
"mastering-css-grid-and-flexbox"
"10-essential-libraries-for-python-developers"
"10-git-commands-every-developer-should-master"
"why-every-developer-should-learn-typescript"
"why-every-developer-should-understand-kubernetes"
"how-to-use-docker-for-containerization"
"how-to-use-terraform-for-infrastructure-as-code"
"the-pros-and-cons-of-monolithic-vs-microservices-architecture"
"why-your-app-needs-a-robust-testing-strategy"
"how-to-secure-your-apis-against-common-attacks"
"10-ways-to-improve-your-code-review-process"
"10-ways-to-make-your-code-more-maintainable"
"cloud-architecture-design-scalable-and-resilient-systems"
"cloud-native-applications-build-scalable-resilient-systems"
"devops-for-beginners-start-building-your-first-pipeline"
"cicd-best-practices-streamline-software-delivery"
"how-to-use-ansible-for-server-automation"
"machine-learning-techniques-for-beginners"
"how-to-use-tensorflow-for-image-classification"
"a-comprehensive-guide-to-machine-learning-algorithms"
"understanding-natural-language-processing"
"10-essential-cybersecurity-tips-for-beginners"
"cybersecurity-best-practices"
"how-to-secure-your-data-and-business-assets-for-2023"
"modern-cybersecurity-a-guide-to-zero-trust-architecture")

# Create temp directory for posts to keep
mkdir -p /tmp/keep_posts

# Move posts to keep to temp directory
for post in "${KEEP_POSTS[@]}"; do
    if [ -d "$BLOG_DIR/$post" ]; then
        mv "$BLOG_DIR/$post" /tmp/keep_posts/
    fi
done

# Remove all posts from blog directory
rm -rf "$BLOG_DIR"/*

# Move kept posts back
mv /tmp/keep_posts/* "$BLOG_DIR/"

# Cleanup
rm -rf /tmp/keep_posts