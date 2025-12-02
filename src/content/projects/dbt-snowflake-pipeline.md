---
name: 'ELT Pipeline with dbt + Snowflake'
description: 'Production ELT pipeline on Snowflake with dbt transformations, medallion architecture, dimensional modeling, Airflow orchestration, and CI/CD workflows.'
tags: ['dbt', 'snowflake', 'airflow', 'sql', 'docker']
link: 'https://github.com/JeffWilliams2'
startDate: '2025-09-01'
---

## The Problem

Raw data sitting in a data warehouse is useless without transformation. Needed a repeatable, tested, and documented process to turn source data into analytics-ready tables with proper orchestration.

## What I Built

### Medallion Architecture
Implemented three-layer data architecture for progressive data refinement:

```
models/
├── staging/      # Bronze → Raw data cleanup
├── intermediate/ # Silver → Business logic
└── marts/        # Gold → Analytics-ready tables
    ├── dim_customers.sql
    ├── dim_products.sql
    └── fact_orders.sql
```

### Dimensional Models
- Designed **star schema** with fact and dimension tables
- Implemented **Type 2 slowly changing dimensions** for historical tracking
- Enabled sub-second query performance on analytics workloads

### Airflow Integration
- Orchestrated dbt runs via Apache Airflow for scheduled transformations
- Built DAGs with dependency management, retries, and alerting
- Containerized with Docker for consistent execution across environments

### Testing & CI/CD
- **50+ automated data quality tests** (uniqueness, not-null, referential integrity, custom business rules)
- GitHub Actions workflow runs `dbt compile`, `dbt test`, and generates documentation on every PR
- Zero-downtime production deployments

## Technical Approach

**Incremental Processing**: Only process new/changed records—critical for large tables.

```sql
{{ config(materialized='incremental', unique_key='order_id') }}

SELECT * FROM {{ source('raw', 'orders') }}
{% if is_incremental() %}
  WHERE updated_at > (SELECT MAX(updated_at) FROM {{ this }})
{% endif %}
```

**Snowflake Optimization**: Clustering keys on frequently filtered columns. Materialized views for common aggregations.

## Results

- **Sub-second query performance** on analytics workloads
- **50+ automated tests** ensuring data accuracy and consistency
- Full **data lineage and documentation** auto-generated
- Scalable architecture supporting future data sources

## Key Technologies

dbt, Snowflake, Apache Airflow, SQL, Docker, GitHub Actions
