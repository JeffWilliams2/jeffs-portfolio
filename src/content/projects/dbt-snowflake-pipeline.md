---
name: 'Modern ELT Pipeline with dbt + Snowflake'
description: 'Production ELT data pipeline on Snowflake with dbt transformations, dimensional modeling (fact + star schema), comprehensive data quality testing, and CI/CD workflows with automated documentation.'
tags: ['dbt', 'snowflake', 'airflow', 'sql', 'data-modeling', 'cicd', 'docker']
link: 'https://github.com/JeffWilliams2'
startDate: '2025-09-01'
---

# Modern ELT Pipeline with dbt + Snowflake

## Overview

Built production-ready ELT pipeline on Snowflake with dbt transformations, implementing dimensional modeling with fact and star schema design. Achieved sub-second query performance with comprehensive data quality testing and automated CI/CD workflows.

## Key Achievements

### ⚡ Performance
- **Sub-second** query performance on analytics workloads
- Optimized dimensional models for fast aggregations
- Efficient incremental transformations
- Partitioning and clustering strategies

### 🏗️ Data Modeling
- **Fact table** with business metrics
- **Star schema** dimensional design
- Type 2 slowly changing dimensions (SCD)
- Denormalized analytics-ready tables

### ✅ Data Quality
- Comprehensive dbt test coverage
- Schema validation and enforcement
- Referential integrity checks
- Automated data quality monitoring

## Technical Architecture

```
┌─────────────────────────────────────────┐
│        Source Data Systems               │
│   (APIs, Databases, Files)              │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│     Apache Airflow Orchestration        │
│   • EL (Extract-Load) to Snowflake     │
│   • Scheduled incremental loads        │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│        Snowflake Data Warehouse         │
│                                         │
│   ┌─────────────────────────────────┐  │
│   │   Staging Layer (Raw Data)      │  │
│   └────────────┬────────────────────┘  │
│                │                        │
│                ▼                        │
│   ┌─────────────────────────────────┐  │
│   │   Intermediate Layer            │  │
│   │   (Cleaned & Standardized)      │  │
│   └────────────┬────────────────────┘  │
│                │                        │
│                ▼                        │
│   ┌─────────────────────────────────┐  │
│   │   Marts Layer                   │  │
│   │   • Fact Tables                 │  │
│   │   • Dimension Tables (Star)     │  │
│   │   • Analytics-Ready Views       │  │
│   └─────────────────────────────────┘  │
└─────────────────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│        BI Tools & Analytics             │
│   (Tableau, Looker, Python)             │
└─────────────────────────────────────────┘
```

## dbt Implementation

### Project Structure

```
dbt_project/
├── models/
│   ├── staging/           # Raw data cleanup
│   │   ├── stg_orders.sql
│   │   ├── stg_customers.sql
│   │   └── stg_products.sql
│   ├── intermediate/      # Business logic
│   │   ├── int_orders_joined.sql
│   │   └── int_customer_metrics.sql
│   └── marts/            # Analytics models
│       ├── dim_customers.sql
│       ├── dim_products.sql
│       ├── dim_date.sql
│       └── fact_orders.sql
├── tests/
│   ├── schema.yml        # dbt tests
│   └── custom_tests/     # Custom SQL tests
├── macros/
│   └── custom_functions.sql
└── dbt_project.yml
```

### Dimensional Model Design

**Fact Table: fact_orders**
```sql
-- Grain: One row per order line item
CREATE TABLE fact_orders AS (
  SELECT
    order_id,
    customer_key,      -- FK to dim_customers
    product_key,       -- FK to dim_products
    order_date_key,    -- FK to dim_date
    quantity,
    unit_price,
    total_amount,
    discount_amount,
    net_amount
  FROM ...
);
```

**Dimension Tables (Star Schema):**
- `dim_customers` - Customer attributes with SCD Type 2
- `dim_products` - Product catalog and hierarchy
- `dim_date` - Date dimension with calendar attributes
- `dim_time` - Time of day breakdowns (if needed)

### Data Quality Testing

**dbt Test Coverage:**

```yaml
# schema.yml
models:
  - name: fact_orders
    columns:
      - name: order_id
        tests:
          - unique
          - not_null
      - name: customer_key
        tests:
          - not_null
          - relationships:
              to: ref('dim_customers')
              field: customer_key
      - name: total_amount
        tests:
          - not_null
          - positive_values
      - name: net_amount
        tests:
          - amount_calculation_accuracy
```

**Custom Tests:**
- Referential integrity across dimensions
- Business rule validation
- Data freshness checks
- Row count reconciliation

## CI/CD Pipeline

### Automated Workflows

**1. Development Workflow**
```yaml
# .github/workflows/dbt_ci.yml
- Run dbt compile on PRs
- Execute dbt test on dev schema
- Generate documentation
- Code quality checks (SQLFluff)
```

**2. Production Deployment**
```yaml
# Airflow DAG
- dbt run (incremental models)
- dbt test (data quality)
- dbt docs generate
- Notify on failures
```

**3. Documentation**
- Automated dbt docs generation
- Lineage diagrams
- Model descriptions
- Column-level documentation

## Orchestration with Apache Airflow

### DAG Structure

```python
from airflow import DAG
from airflow.providers.dbt.cloud.operators import DbtCloudRunJobOperator

with DAG('dbt_snowflake_pipeline') as dag:
    
    # Extract & Load (EL)
    extract_sources >> load_to_snowflake
    
    # Transform with dbt
    load_to_snowflake >> dbt_run_staging
    dbt_run_staging >> dbt_run_intermediate
    dbt_run_intermediate >> dbt_run_marts
    
    # Quality checks
    dbt_run_marts >> dbt_test
    
    # Documentation
    dbt_test >> dbt_docs_generate
```

### Incremental Processing

```sql
-- Incremental model example
{{ config(
    materialized='incremental',
    unique_key='order_id',
    on_schema_change='sync_all_columns'
) }}

SELECT * FROM {{ source('raw', 'orders') }}

{% if is_incremental() %}
  WHERE updated_at > (SELECT MAX(updated_at) FROM {{ this }})
{% endif %}
```

## Snowflake Optimization

### Performance Tuning

**Clustering:**
```sql
ALTER TABLE fact_orders 
  CLUSTER BY (order_date_key, customer_key);
```

**Materialized Views:**
```sql
CREATE MATERIALIZED VIEW mv_daily_sales AS
  SELECT 
    order_date,
    SUM(net_amount) as total_sales,
    COUNT(DISTINCT customer_key) as unique_customers
  FROM fact_orders
  GROUP BY order_date;
```

**Query Optimization:**
- Partition pruning with date keys
- Result caching for common queries
- Appropriate warehouse sizing
- Query profiling and tuning

## Key Features

### 1. Slowly Changing Dimensions (Type 2)
```sql
-- dim_customers with history tracking
CREATE TABLE dim_customers (
  customer_key INT,        -- Surrogate key
  customer_id STRING,      -- Natural key
  customer_name STRING,
  email STRING,
  tier STRING,
  valid_from DATE,
  valid_to DATE,
  is_current BOOLEAN
);
```

### 2. Data Lineage
- Visual DAG in dbt docs
- Upstream/downstream dependencies
- Impact analysis for changes
- Source-to-mart traceability

### 3. Testing Framework
- 50+ automated tests
- Pre-deployment validation
- Post-load verification
- Alerting on test failures

## Monitoring & Observability

**Metrics Tracked:**
- Model run times
- Row counts and volumes
- Test pass/fail rates
- Data freshness
- Query performance

**Alerting:**
- Test failures
- Long-running models
- Data quality issues
- Schema changes

## Technologies Used

```
Data Warehouse:   Snowflake
Transformation:   dbt-core
Orchestration:    Apache Airflow
CI/CD:            Docker, GitHub Actions
Testing:          dbt tests, Great Expectations
Documentation:    dbt docs
Version Control:  Git
```

## Key Learnings

1. **Dimensional Modeling**: Star schema optimal for analytics
2. **Incremental Processing**: Critical for large datasets
3. **Testing**: Comprehensive tests catch issues early
4. **Documentation**: Auto-generated docs improve collaboration
5. **CI/CD**: Automated deployments reduce errors

## Business Impact

### Before
- ❌ Manual SQL transformations
- ❌ Limited test coverage
- ❌ No version control
- ❌ Inconsistent data quality

### After
- ✅ Automated dbt pipelines
- ✅ 50+ automated tests
- ✅ Git-based workflow
- ✅ Consistent, high-quality data
- ✅ Sub-second query performance

## Future Enhancements

- [ ] Add more dimensional models
- [ ] Implement data contracts
- [ ] Advanced SCD strategies
- [ ] Machine learning feature store
- [ ] Real-time streaming integration

## Project Highlights

This project demonstrates:
- Modern data warehouse design
- dbt best practices
- Dimensional modeling expertise
- CI/CD for analytics
- Data quality engineering
- Production-grade pipeline development
