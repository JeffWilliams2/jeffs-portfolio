---
name: 'Production Data Platform'
description: 'Built production data platform at a genomics startup—multi-source ingestion framework, Kubernetes infrastructure, data governance, and ML-ready pipelines processing 20TB+ data.'
tags: ['kubernetes', 'airflow', 'dbt', 'python', 'openmetadata']
link: 'https://github.com/JeffWilliams2'
startDate: '2025-05-01'
endDate: '2025-09-01'
---

## The Challenge

A genomics startup needed a production data platform to ingest, process, and govern biomedical data from 15+ external sources—OpenNeuro repositories, NIfTI brain scans, DICOM imaging. The existing process was manual, taking weeks to onboard new datasets.

## What I Built

### Multi-Source Data Ingestion Framework
- Architected ingestion framework integrating **15+ external repositories** (OpenNeuro, medical imaging datasets)
- Built modular ETL pipelines in Airflow for automated download, validation, and transformation of medical imaging data
- Standardized heterogeneous formats (NIfTI, DICOM) to Parquet for unified analytics consumption
- Designed reusable data cleaning framework enabling rapid pipeline development for new sources

### Platform Infrastructure
- Deployed production Apache Airflow on **Kubernetes cluster** (isolated namespace) for scalable pipeline execution
- Configured persistent storage, network policies, RBAC, and horizontal pod autoscaling
- Integrated dbt with Airflow for version-controlled SQL transformations in medallion architecture

### Data Governance
- Stood up **OpenMetadata** data catalog integrated with PostgreSQL and Elasticsearch
- Implemented metadata lineage tracking across **1,000+ datasets**
- Configured monitoring, alerting, and access controls for multi-tenant environment

### ML Data Preparation
- Built preprocessing pipeline for medical imaging datasets preparing **10,000+ brain MRI scans** for deep learning
- Performed EDA on genomics datasets to identify patterns and data quality issues
- Developed automated feature engineering workflows integrating imaging metadata with clinical variables

## Technical Decisions

**Why Kubernetes?** Self-healing, auto-scaling, and zero-downtime deployments. Critical for sensitive medical data.

**Why OpenMetadata?** Enterprise-grade data governance with lineage tracking. Researchers could discover datasets and understand data flow.

**Why Parquet?** Columnar format with schema evolution. Efficient for analytics queries and ML feature extraction.

## Results

- Reduced dataset onboarding from **weeks to days**
- Achieved **99.5% platform uptime**
- Tracked lineage across **1,000+ datasets**
- Prepared **10,000+ scans** for ML training
- Built **25+ monitoring dashboards**

## Key Technologies

Python, Apache Airflow, Kubernetes, Docker, dbt, OpenMetadata, PostgreSQL, Elasticsearch, MinIO, Prometheus, Grafana, PyTorch, Parquet
