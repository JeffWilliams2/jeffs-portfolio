---
name: 'AWS EMR Spark Pipeline'
description: 'Distributed data processing on AWS EMR with PySpark for large-scale financial data analysis. Features S3 integration and scalable cluster configuration.'
tags: ['spark', 'pyspark', 'aws', 'emr', 's3']
link: 'https://github.com/JeffWilliams2'
startDate: '2025-10-01'
---

## The Problem

Processing large historical financial datasets on a single machine was taking hours. Needed distributed compute that could scale with data volume.

## What I Built

**EMR Cluster**: Configured AWS EMR cluster with master and worker nodes. Set up VPC networking, security groups, and S3 access.

**PySpark Jobs**: Built data processing pipelines using PySpark DataFrames and Spark SQL. Focused on aggregations, joins, and time-series analysis.

```python
from pyspark.sql import SparkSession
from pyspark.sql.functions import avg, sum, window

spark = SparkSession.builder.appName("FinancialAnalysis").getOrCreate()

# Read from S3
df = spark.read.parquet("s3://bucket/financial-data/")

# Time-series aggregation
daily_metrics = df.groupBy(
    window("date", "1 day"),
    "ticker"
).agg(
    avg("close").alias("avg_close"),
    sum("volume").alias("total_volume")
)

# Write partitioned output
daily_metrics.write.partitionBy("date").parquet("s3://bucket/processed/")
```

**Performance Tuning**: Optimized Spark configurations for memory, parallelism, and shuffle operations. Used broadcast joins for small lookup tables.

## Key Decisions

**Why EMR over local Spark?** Data volume exceeded single-machine memory. EMR provides managed infrastructure with auto-scaling.

**Why Parquet?** Columnar format with compression. Significant I/O savings for analytical queries that only need specific columns.

**Cost Optimization**: Used spot instances for worker nodes (60% cost savings). Auto-terminate cluster after job completion.

## Results

- Processed GB-scale datasets in minutes
- Scalable to larger volumes without code changes
- Repeatable infrastructure with IaC

## Key Technologies

Apache Spark, PySpark, AWS EMR, S3, VPC, Python
