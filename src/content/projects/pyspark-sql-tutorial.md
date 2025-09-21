---
name: 'PySpark SQL Tutorial'
description: 'A comprehensive tutorial on PySpark SQL, demonstrating advanced data processing and analysis techniques. Features practical examples of DataFrame operations, SQL queries, window functions, and performance optimization.'
tags: ['python', 'pyspark', 'sql', 'big-data', 'data-engineering']
link: 'https://github.com/JeffWilliams2/pyspark-tutorial'
startDate: '2025-08-15'
---

# PySpark SQL Tutorial

## Overview

A comprehensive tutorial demonstrating advanced PySpark SQL functionalities for large-scale data processing and analysis. This project showcases practical implementations of DataFrame operations, SQL queries, and window functions with real-world examples.

## Features

- DataFrame creation and manipulation
- SQL query execution
- Temporary view management
- Window function demonstrations
- Performance optimization techniques
- Real-world data processing examples

## Key Components

### Environment Setup
- PySpark configuration
- Jupyter notebook integration
- Environment variable management

### Data Operations
- CSV file loading
- Schema inference
- DataFrame transformations
- SQL query execution

### Advanced Features
- Window functions
- Subqueries
- Temporary views
- Join operations
- Aggregation functions

## Technical Implementation

### Environment Configuration
```python
import os
os.environ['SPARK_HOME'] = "/path/to/spark"
os.environ['PYSPARK_DRIVER_PYTHON'] = 'jupyter'
os.environ['PYSPARK_DRIVER_PYTHON_OPTS'] = 'lab'
os.environ['PYSPARK_PYTHON'] = 'python'
```

### SparkSession Initialization
```python
from pyspark.sql import SparkSession

spark = SparkSession.builder.appName("DataFrameSQL").getOrCreate()
```

### Data Processing Examples

1. DataFrame Creation
```python
df = spark.read.csv("data.csv", header=True, inferSchema=True)
```

2. SQL Queries
```python
df.createOrReplaceTempView("my_table")
result = spark.sql("SELECT * FROM my_table WHERE age > 25")
```

3. Window Functions
```python
from pyspark.sql.window import Window
from pyspark.sql import functions as F

window_spec = Window.partitionBy("department").orderBy(F.desc("salary"))
df.withColumn("rank", F.rank().over(window_spec))
```

## Project Structure

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

## Getting Started

1. Clone the repository
```bash
git clone https://github.com/JeffWilliams2/pyspark-tutorial.git
cd pyspark-tutorial
```

2. Install dependencies
```bash
pip install -r requirements.txt
```

3. Launch Jupyter Notebook
```bash
jupyter lab
```

## Prerequisites

- Python 3.8+
- Apache Spark 3.x
- Jupyter Lab/Notebook
- Basic SQL knowledge

## Usage Examples

### Basic DataFrame Operations
```python
# Load data
df = spark.read.csv("data.csv", header=True)

# Show schema
df.printSchema()

# Basic transformations
df.select("column1", "column2").filter("column1 > 100")
```

### Advanced SQL Queries
```python
# Register temporary view
df.createOrReplaceTempView("data")

# Complex query with joins and aggregations
spark.sql("""
    SELECT dept, 
           AVG(salary) as avg_salary,
           COUNT(*) as emp_count
    FROM data
    GROUP BY dept
    HAVING COUNT(*) > 10
""")
```