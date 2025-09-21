---
title: 'Dagster: Modern Data Orchestration for ML Pipelines'
description: 'A practical guide to building ML pipelines with Dagster, drawing from real experience in financial and biomedical data engineering.'
date: '2025-09-20'
tags: ['data-engineering', 'mlops', 'python', 'dagster', 'machine-learning']
---

# Dagster: Modern Data Orchestration for ML Pipelines

As I've been exploring tools for orchestrating complex data pipelines, I've found Dagster to be an excellent choice. Here's my journey learning Dagster, starting from basic concepts to real-world applications.

## Why I Chose Dagster

When looking for a data orchestration tool, I needed something that could:
- Handle complex data dependencies
- Provide clear visibility into pipeline status
- Support testing and monitoring
- Integrate well with modern data tools

## Getting Started with Dagster

Let's start with a simple pipeline similar to what I first built:

```python
from dagster import job, op, In, Out, Definitions
import pandas as pd

@op
def extract_data():
    """Extract data from source"""
    return pd.read_csv("raw_data.csv")

@op
def transform_data(data: pd.DataFrame):
    """Basic transformations"""
    return data.dropna().reset_index(drop=True)

@op
def load_data(data: pd.DataFrame):
    """Load data to destination"""
    data.to_parquet("processed_data.parquet")

@job
def my_first_pipeline():
    data = extract_data()
    cleaned = transform_data(data)
    load_data(cleaned)

defs = Definitions(
    jobs=[my_first_pipeline]
)
```

## Real-World Example: Biomedical Data Pipeline

Here's an example of using Dagster to process genomic data:

```python
from dagster import asset, AssetIn, Output, Definitions
import polars as pl

@asset
def raw_genomic_data():
    """Load raw genomic data"""
    return pl.scan_parquet("raw_samples/*.parquet").collect()

@asset(ins={"raw_data": AssetIn("raw_genomic_data")})
def quality_filtered_data(raw_data):
    """Filter by quality scores"""
    return raw_data.filter(
        pl.col("quality_score") >= 30
    )

@asset(ins={"filtered_data": AssetIn("quality_filtered_data")})
def variant_analysis(filtered_data):
    """Analyze genetic variants"""
    return filtered_data.groupby("variant_id").agg([
        pl.col("sample_id").count().alias("sample_count"),
        pl.col("quality_score").mean().alias("avg_quality")
    ])

defs = Definitions(
    assets=[raw_genomic_data, quality_filtered_data, variant_analysis]
)
```

## Key Features I Use Daily

### 1. Asset-Based Workflows

This is how I structure data dependencies:

```python
@asset
def financial_transactions():
    """Daily financial transactions"""
    return pl.read_csv("daily_transactions.csv")

@asset(ins={"transactions": AssetIn("financial_transactions")})
def daily_summary(transactions):
    """Calculate daily statistics"""
    return transactions.groupby("date").agg([
        pl.col("amount").sum().alias("total_amount"),
        pl.count().alias("transaction_count")
    ])

@asset(
    ins={
        "daily_stats": AssetIn("daily_summary"),
        "historical": AssetIn("historical_data")
    }
)
def anomaly_detection(daily_stats, historical):
    """Detect unusual patterns"""
    # Anomaly detection logic
    return detect_anomalies(daily_stats, historical)
```

### 2. Testing and Monitoring

A crucial practice in data engineering - always test your pipelines:

```python
from dagster import test_asset

def test_quality_filtered_data():
    # Create test data
    test_data = pl.DataFrame({
        "sample_id": ["S1", "S2", "S3"],
        "quality_score": [35, 25, 40]
    })
    
    # Run asset with test data
    result = test_asset(
        quality_filtered_data,
        input_data={"raw_data": test_data}
    )
    
    # Verify results
    assert len(result) == 2  # Only quality scores >= 30
    assert all(result["quality_score"] >= 30)
```

### 3. Resource Management

Managing database connections and API clients:

```python
from dagster import resource, ConfigurableResource

class DatabaseConnection(ConfigurableResource):
    connection_string: str
    
    def get_connection(self):
        return create_db_connection(self.connection_string)

@asset(required_resource_keys={"db"})
def save_results(context, data):
    """Save results to database"""
    with context.resources.db.get_connection() as conn:
        data.write_database(conn)
```

## Best Practices from My Experience

### 1. Structured Error Handling

```python
from dagster import DagsterError, RetryPolicy

@asset(
    retry_policy=RetryPolicy(
        max_retries=3,
        delay=30
    )
)
def process_api_data():
    try:
        # API call logic
        pass
    except APIError as e:
        raise DagsterError(f"API Error: {str(e)}")
```

### 2. Configuration Management

```python
from dagster import Config

class ProcessingConfig(Config):
    min_quality_score: int
    batch_size: int
    output_format: str

@asset(config_schema=ProcessingConfig)
def process_batch(context):
    config = context.op_config
    return process_data(
        min_quality=config.min_quality_score,
        batch_size=config.batch_size
    )
```

## Common Challenges and Solutions

1. **Handling Large Datasets**
   ```python
   @asset
   def process_large_file():
       # Process in chunks
       with pl.scan_csv("large_file.csv").streaming(): 
           for batch in df.iter_batches(size=10000):
               process_batch(batch)
   ```

2. **Managing Dependencies**
   ```python
   @asset(
       deps=["upstream_asset"],
       freshness_policy=FreshnessPolicy(
           maximum_lag_minutes=60
       )
   )
   def dependent_asset():
       # Processing logic
       pass
   ```

## Integration with Modern Tools

In my current role, I combine Dagster with other tools:

```python
# Using DuckDB for analytics
@asset
def analyze_data(context, data):
    import duckdb
    
    # Register data in DuckDB
    duckdb.register("temp_table", data.to_pandas())
    
    # Run analysis
    return duckdb.sql("""
        SELECT category,
               COUNT(*) as count,
               AVG(amount) as avg_amount
        FROM temp_table
        GROUP BY category
    """).df()
```

## Monitoring and Observability

Setting up proper monitoring is crucial for any data pipeline:

```python
from dagster import sensor

@sensor(asset_selection=[daily_summary])
def data_quality_sensor(context):
    """Monitor data quality metrics"""
    latest = context.instance.get_latest_materialization("daily_summary")
    if latest and latest.metadata["row_count"] < 1000:
        context.log.error("Unusually low record count detected")
```

## Conclusion

Dagster has become an essential part of my data engineering toolkit. Whether I'm processing financial transactions or analyzing genomic data, its combination of asset-based workflows and robust monitoring capabilities makes it invaluable for modern data pipelines.

## Learning Resources

- [Dagster Documentation](https://docs.dagster.io/)
- [Dagster Concepts](https://docs.dagster.io/concepts)
- [Dagster Examples](https://github.com/dagster-io/dagster/tree/master/examples)
- [Dagster Slack Community](https://www.dagster.io/slack)