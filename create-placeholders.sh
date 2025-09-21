#!/bin/bash

# Create placeholder images for projects
cd /Users/jwilliams/Downloads/portfolio-master/public/static

# Create NYC Airbnb Analysis placeholder
convert -size 1200x630 xc:black -gravity center -pointsize 40 \
-fill white -annotate 0 "NYC Airbnb Analysis" \
nyc-airbnb-analysis.png

# Create PySpark SQL Tutorial placeholder
convert -size 1200x630 xc:black -gravity center -pointsize 40 \
-fill white -annotate 0 "PySpark SQL Tutorial" \
pyspark-sql-tutorial.png