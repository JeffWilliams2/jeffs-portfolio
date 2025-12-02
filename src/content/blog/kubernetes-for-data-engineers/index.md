---
title: 'Kubernetes for Data Engineers: Why and How'
description: 'Learn why Kubernetes is becoming essential for data engineering. Practical insights from deploying a production data platform processing 20TB+ with 99.5% uptime.'
date: 2024-11-22
tags: ['kubernetes', 'data-engineering', 'infrastructure', 'devops']
draft: false
---

# Kubernetes for Data Engineers: Why and How

Six months ago, I didn't know anything about Kubernetes. Today, I run a production data platform on Kubernetes processing 20TB+ of data with 99.5% uptime. Here's what I learned and why data engineers should care about K8s.

## Why Kubernetes for Data Pipelines?

### The Problem: Traditional Data Infrastructure

Traditional data infrastructure has several pain points:

- **Manual Scaling**: Add more servers when workload increases
- **Resource Waste**: Servers idle during off-peak hours
- **Fragile Deployments**: "It works on my machine" syndrome
- **Poor Isolation**: One failing job crashes the entire server

### The Solution: Container Orchestration

Kubernetes solves these problems by:

1. **Auto-scaling**: Spin up resources when needed
2. **Resource Efficiency**: Share compute across workloads
3. **Reproducibility**: Container images ensure consistency
4. **Isolation**: Jobs run in isolated pods

## Key Kubernetes Concepts for Data Engineers

### 1. Pods

A pod is the smallest deployable unit. Think of it as a wrapper around your container.

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: data-processing-job
spec:
  containers:
  - name: etl-worker
    image: my-data-pipeline:v1
    resources:
      requests:
        memory: "4Gi"
        cpu: "2"
      limits:
        memory: "8Gi"
        cpu: "4"
```

**Why it matters**: Each pod is isolated. If one crashes, others keep running.

### 2. Deployments

A deployment manages multiple replicas of your application.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: airflow-worker
spec:
  replicas: 3  # Run 3 copies
  selector:
    matchLabels:
      app: airflow
  template:
    metadata:
      labels:
        app: airflow
    spec:
      containers:
      - name: airflow-worker
        image: apache/airflow:2.7.0
```

**Why it matters**: Horizontal scaling for parallel data processing.

### 3. Persistent Volumes

Data needs to persist even when pods restart.

```yaml
apiVersion: v1
kind: PersistentVolumeClaim
metadata:
  name: data-storage
spec:
  accessModes:
    - ReadWriteMany
  resources:
    requests:
      storage: 1Ti
```

**Why it matters**: Store your data lakehouse files, databases, and intermediate results.

### 4. ConfigMaps and Secrets

Manage configuration and credentials separately from code.

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: pipeline-config
data:
  database_host: "postgres.default.svc.cluster.local"
  batch_size: "1000"
---
apiVersion: v1
kind: Secret
metadata:
  name: db-credentials
type: Opaque
data:
  password: cGFzc3dvcmQxMjM=  # base64 encoded
```

**Why it matters**: Different configs for dev/staging/prod without changing code.

## Real-World Example: Apache Airflow on Kubernetes

In production, we deployed Airflow on Kubernetes. Here's the architecture:

```
┌─────────────────────────────────────────┐
│     Kubernetes Cluster                  │
│                                         │
│  ┌──────────────┐  ┌──────────────┐   │
│  │   Airflow    │  │   Airflow    │   │
│  │   Scheduler  │  │   Webserver  │   │
│  └──────────────┘  └──────────────┘   │
│                                         │
│  ┌──────────────┐  ┌──────────────┐   │
│  │   Worker 1   │  │   Worker 2   │   │
│  │  (Auto-scale)│  │  (Auto-scale)│   │
│  └──────────────┘  └──────────────┘   │
│                                         │
│  ┌─────────────────────────────────┐  │
│  │   PostgreSQL (Metadata DB)      │  │
│  └─────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

### Benefits We Saw:

**Before Kubernetes**:
- Fixed number of workers (5)
- Peak usage: 60% capacity wasted
- Deployment: 2 hours of downtime
- Scaling: Manual, took days

**After Kubernetes**:
- Auto-scaling workers (2-10)
- Resource utilization: 85%
- Deployment: Rolling updates, zero downtime
- Scaling: Automatic based on queue depth

## Practical Tips for Data Engineers

### 1. Start with Docker First

Before Kubernetes, master Docker:

```dockerfile
# Dockerfile for data pipeline
FROM python:3.10-slim

WORKDIR /app

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY src/ ./src/

CMD ["python", "src/pipeline.py"]
```

Build and test locally:
```bash
docker build -t my-pipeline:v1 .
docker run my-pipeline:v1
```

### 2. Use Helm Charts

Helm is like a package manager for Kubernetes. Don't write YAML from scratch.

```bash
# Install Airflow using Helm
helm repo add apache-airflow https://airflow.apache.org
helm install airflow apache-airflow/airflow
```

### 3. Resource Requests and Limits

Always set resource constraints:

```yaml
resources:
  requests:
    memory: "2Gi"   # Guaranteed
    cpu: "1"
  limits:
    memory: "4Gi"   # Maximum allowed
    cpu: "2"
```

**Why**: Prevents one job from consuming all cluster resources.

### 4. Use Namespaces for Environments

Separate dev, staging, and production:

```bash
kubectl create namespace dev
kubectl create namespace prod

# Deploy to dev
kubectl apply -f pipeline.yaml -n dev

# Deploy to prod
kubectl apply -f pipeline.yaml -n prod
```

## Common Patterns for Data Workloads

### Pattern 1: Batch Processing Jobs

Use Kubernetes Jobs for one-time tasks:

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: daily-etl
spec:
  template:
    spec:
      containers:
      - name: etl
        image: my-etl-pipeline:v1
        env:
        - name: EXECUTION_DATE
          value: "2024-11-22"
      restartPolicy: OnFailure
```

### Pattern 2: Scheduled CronJobs

Run pipelines on a schedule:

```yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: hourly-ingestion
spec:
  schedule: "0 * * * *"  # Every hour
  jobTemplate:
    spec:
      template:
        spec:
          containers:
          - name: ingestion
            image: data-ingestion:v1
          restartPolicy: OnFailure
```

### Pattern 3: Streaming Workloads

Deploy long-running streaming jobs:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: kafka-consumer
spec:
  replicas: 3
  template:
    spec:
      containers:
      - name: consumer
        image: kafka-stream-processor:v1
```

## Monitoring Your Data Pipelines

### Prometheus for Metrics

```yaml
apiVersion: v1
kind: ConfigMap
metadata:
  name: prometheus-config
data:
  prometheus.yml: |
    scrape_configs:
      - job_name: 'data-pipelines'
        kubernetes_sd_configs:
        - role: pod
        relabel_configs:
        - source_labels: [__meta_kubernetes_pod_label_app]
          regex: data-pipeline
          action: keep
```

### Grafana for Visualization

Key metrics to track:
- Pod CPU/Memory usage
- Pipeline execution times
- Failed job counts
- Data processing throughput

In production, we built 25+ custom dashboards tracking:
- Pipeline health
- Data quality scores
- Resource utilization
- SLA compliance

## Cost Considerations

Kubernetes can save money if done right:

**Our Cost Savings**:
- Auto-scaling: 40% reduction in idle resources
- Spot instances: 60% cheaper compute
- Efficient packing: Running 3x more workloads on same hardware

**Cost Gotchas**:
- Over-provisioning: Requesting too many resources
- Always-on dev environments: Shut them down at night
- Large persistent volumes: Clean up old data

## When NOT to Use Kubernetes

Kubernetes adds complexity. Skip it if:

- You have < 5 data pipelines
- Your workloads are simple batch jobs
- You're a solo developer without ops support
- Your data fits on one machine

Use simpler alternatives:
- Docker Compose for local development
- AWS Batch for simple job scheduling
- Managed services (Cloud Composer, AWS MWAA)

## Getting Started Checklist

1. ✅ Learn Docker basics
2. ✅ Run minikube locally
3. ✅ Deploy a simple application
4. ✅ Add persistent storage
5. ✅ Implement monitoring
6. ✅ Set up CI/CD pipeline
7. ✅ Configure auto-scaling
8. ✅ Practice disaster recovery

## Key Takeaways

- Kubernetes provides scalability and reliability for data workloads
- Start with Docker, then add Kubernetes when complexity justifies it
- Use Helm charts to avoid writing YAML from scratch
- Monitor everything: resource usage, job success rates, data quality
- Auto-scaling saves money and improves performance

Kubernetes has a learning curve, but for production data platforms, the benefits are worth it. Our 99.5% uptime proves it works.

---

**Questions about Kubernetes for data engineering?** I learned by doing—happy to share more details about our setup. Find me on [LinkedIn](https://linkedin.com/in/jefferywilliams4).
