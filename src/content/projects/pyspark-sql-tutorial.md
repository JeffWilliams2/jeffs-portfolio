---
name: 'PySpark SQL Tutorial'
description: 'Educational project demonstrating PySpark DataFrame operations, SQL queries, window functions, and distributed data processing patterns.'
tags: ['pyspark', 'sql', 'python', 'spark']
link: 'https://github.com/JeffWilliams2/pyspark-tutorial'
startDate: '2025-08-15'
---

## Purpose

A hands-on tutorial covering PySpark SQL fundamentals. Built while learning distributed data processing—useful as a reference for common patterns.

## Topics Covered

**DataFrame Operations**
```python
# Load and inspect
df = spark.read.csv("data.csv", header=True, inferSchema=True)
df.printSchema()
df.describe().show()

# Transformations
df.select("col1", "col2") \
  .filter(df.col1 > 100) \
  .withColumn("new_col", df.col1 * 2)
```

**SQL Queries**
```python
df.createOrReplaceTempView("my_table")

spark.sql("""
    SELECT dept, 
           AVG(salary) as avg_salary,
           COUNT(*) as count
    FROM my_table
    GROUP BY dept
    HAVING COUNT(*) > 10
    ORDER BY avg_salary DESC
""")
```

**Window Functions**
```python
from pyspark.sql.window import Window
from pyspark.sql import functions as F

window = Window.partitionBy("dept").orderBy(F.desc("salary"))

df.withColumn("rank", F.rank().over(window)) \
  .withColumn("running_total", F.sum("salary").over(window))
```

**Joins and Aggregations**
```python
# Different join types
df1.join(df2, df1.id == df2.id, "left")
df1.join(df2, ["common_key"], "inner")

# Complex aggregations
df.groupBy("category").agg(
    F.count("*").alias("count"),
    F.avg("value").alias("avg"),
    F.collect_list("item").alias("items")
)
```

## Repository Structure

```
pyspark-tutorial/
├── notebooks/
│   ├── 01-basics.ipynb
│   ├── 02-dataframes.ipynb
│   ├── 03-sql-queries.ipynb
│   └── 04-window-functions.ipynb
├── data/
│   └── sample_data.csv
└── README.md
```

## Key Technologies

Apache Spark, PySpark, SQL, Python, Jupyter
```