---
name: 'NYC Airbnb Market Analysis'
description: 'An interactive Tableau dashboard analyzing Airbnb rentals across NYC boroughs and neighborhoods. Features comprehensive price analysis, booking trends, and host performance metrics with dynamic visualizations.'
tags: ['tableau', 'data-analysis', 'python', 'visualization', 'real-estate']
link: 'https://public.tableau.com/app/profile/jeff.williams3778/viz/NYCAirbnbTrends_17399453506280/Dashboard1'
startDate: '2025-09-01'
---

# NYC Airbnb Market Analysis Dashboard

## Overview

An interactive Tableau dashboard analyzing Airbnb rentals across New York City's boroughs and neighborhoods. The visualization provides insights into pricing patterns, booking trends, and host ratings in NYC's Airbnb market.

## Features

- Price comparison across NYC boroughs (Manhattan, Brooklyn, Queens, Bronx, Staten Island)
- Interactive neighborhood-level price analysis
- Monthly booking trends visualization
- Top host performance metrics
- Room type distribution analysis
- Review frequency patterns

## Key Insights

- Manhattan dominates with 44.30% of total neighborhoods, followed by Brooklyn at 31.12%
- Highest average prices are found in Manhattan ($196.88), while the Bronx shows the lowest ($87.50)
- Significant seasonal variation in bookings with peak activity in May-June
- Top neighborhoods by price include Tribeca ($490.64) and Battery Park City ($367.56)
- Review patterns vary by room type and borough, with entire homes/apartments receiving the most reviews

## Tools Used

- Tableau for data visualization and dashboard creation
- Python for data preprocessing and analysis
- NYC Airbnb dataset for comprehensive market data

## Data Sources

The dashboard utilizes Airbnb NYC airbnb data, including:
- Listing prices
- Neighborhood information
- Booking volumes
- Host details
- Review metrics

## Implementation Details

### Data Processing
- Cleaned and preprocessed raw Airbnb data using Python
- Aggregated metrics by neighborhood and borough
- Calculated derived metrics like average prices and review frequencies

### Visualization Components
1. Price Analysis
   - Borough-level price comparisons
   - Neighborhood price heatmap
   - Room type price distribution

2. Booking Trends
   - Monthly booking volumes
   - Seasonal patterns
   - Borough-wise comparison

3. Host Analytics
   - Top performing hosts
   - Review frequency analysis
   - Rating distributions

### Interactive Features
- Dynamic filters for boroughs and neighborhoods
- Time-based trend analysis
- Room type selection
- Price range filters

## Future Enhancements

- Additional seasonal trend analysis
- Enhanced map filtering capabilities
- Year-over-year comparison features
- Updated data source integration

## Repository Structure

```
nyc_airbnb/
├── data/
│   ├── raw/
│   └── processed/
├── notebooks/
│   └── data_processing.ipynb
├── tableau/
│   └── nyc_airbnb_dashboard.twb
└── README.md
```

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/JeffWilliams2/NYC_Airbnb.git
cd NYC_Airbnb
```

2. Install dependencies
```bash
pip install -r requirements.txt
```

3. Open the Tableau dashboard
- Navigate to the `tableau` directory
- Open `nyc_airbnb_dashboard.twb` with Tableau Desktop
