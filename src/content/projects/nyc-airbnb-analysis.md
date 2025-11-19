---
name: 'NYC Taxi Data Analytics Pipeline'
description: 'End-to-end data pipeline using Dagster orchestration processing 9.4M+ NYC taxi trip records with GeoPandas geographic analysis, DuckDB analytics, automated scheduling, and real-time monitoring.'
tags: ['dagster', 'python', 'duckdb', 'geopandas', 'data-engineering', 'etl']
link: 'https://github.com/JeffWilliams2'
startDate: '2025-10-01'
---

# NYC Taxi Data Analytics Pipeline

## Overview

Built end-to-end data pipeline using Dagster orchestration framework processing 9.4M+ NYC taxi trip records with automated scheduling, partitioned architecture, and geographic analysis capabilities. Demonstrates data engineering best practices with asset-based architecture and real-time monitoring.

## Key Features

### 🚀 Pipeline Architecture
- **9.4M+ records** processed with Dagster orchestration
- **Event-driven processing** with automated triggers
- **Partitioned architecture** for efficient data handling
- **Geographic analysis** with GeoPandas for spatial insights
- **DuckDB analytics** for flexible data exploration

### 📊 Analytics Capabilities
- Monthly trip pattern analysis with automated scheduling
- Geographic analysis for Manhattan-specific insights
- Sub-second query performance with DuckDB
- Automated reporting and data quality checks

## Technical Architecture

```
┌──────────────────────────────────────────┐
│      Data Source: NYC Taxi Dataset       │
│         (9.4M+ trip records)             │
└──────────────┬───────────────────────────┘
               │
               ▼
┌──────────────────────────────────────────┐
│     Dagster Asset-Based Pipeline         │
│  • Automated scheduling                  │
│  • Partitioned processing                │
│  • Event-driven triggers                 │
└──────────────┬───────────────────────────┘
               │
               ▼
┌──────────────────────────────────────────┐
│        Data Processing Layer             │
│  • Python transformations                │
│  • GeoPandas geographic ops              │
│  • Data quality validation               │
└──────────────┬───────────────────────────┘
               │
               ▼
┌──────────────────────────────────────────┐
│       DuckDB Analytics Engine            │
│  • Sub-second query performance          │
│  • Flexible aggregations                 │
│  • Manhattan-specific analysis           │
└──────────────────────────────────────────┘
```

## Data Engineering Highlights

### 1. Dagster Orchestration
**Asset-Based Architecture:**
- Declarative pipeline definitions
- Automatic dependency resolution
- Built-in data lineage tracking
- Partitioned datasets for scalability

**Automated Scheduling:**
- Monthly partitioning for trip data
- Event-driven processing triggers
- Backfill capabilities
- Configurable refresh schedules

### 2. Geographic Analysis with GeoPandas
**Spatial Operations:**
- Borough and zone-based aggregations
- Manhattan-specific filtering
- Geographic coordinate transformations
- Spatial joins for enrichment

**Use Cases:**
- Trip patterns by neighborhood
- Distance calculations
- Zone-based metrics
- Geographic visualization prep

### 3. High-Performance Analytics
**DuckDB Integration:**
- Sub-second query performance on 9.4M+ records
- In-process analytics engine
- Optimized for aggregations
- SQL interface for exploration

**Performance Metrics:**
- Complex aggregations: < 1 second
- Geographic queries: < 2 seconds
- Full dataset scans: < 5 seconds

## Implementation Details

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
