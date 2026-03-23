# Blog Review & Publishing Prep
## jeffwilliams.dev

---

## PART 1: EXISTING POSTS — WHAT TO FIX

### General Issues Across All Posts

**1. Thumbnails — Replace all river/road stock photos**
Several posts share the same riverside/road photo. This immediately signals to anyone visiting
your portfolio that you didn't invest time in the visual presentation. It undermines the
technical quality of the work underneath.

Recommended replacements per post:

| Post | Recommended Thumbnail Approach |
|---|---|
| Portfolio Website | Screenshot of your actual site — homepage or dark mode |
| AI Travel Recommendation App | Screenshot of the React frontend or AWS architecture diagram |
| ELT Pipeline with Medallion Architecture | Draw a simple medallion Bronze/Silver/Gold diagram in Excalidraw or Lucidchart, screenshot it |
| Real-Time Stock Market Data Pipeline | Screenshot of your Looker dashboard or the Kafka architecture diagram |
| Real-Time Banking CDC Pipeline | You already have a good architecture diagram here — use it as the card thumbnail |
| Neuroimaging & Healthcare Data Lakehouse | Kubernetes/MinIO architecture diagram or a Grafana screenshot |

**Quick option:** Use [Excalidraw](https://excalidraw.com) (free, browser-based) to draw
simple architecture diagrams. They look clean, intentional, and technical — far better than
stock photos. The Banking CDC post already does this correctly. Mirror that approach across
all posts.

---

### Post-by-Post Writing & Technical Review

---

#### 1. Portfolio Website
**Status:** Low priority for deep technical polish — this is a web/dev post, not a data engineering post.

**Fix:**
- The description says "perfect Lighthouse scores" — add the actual score (100/100) and a
  screenshot of the Lighthouse report. Specific numbers are more credible than adjectives.
- Mention the MDX blog setup since that's actually interesting technically (Astro + MDX + 
  dark mode is a deliberate stack choice worth explaining).
- Tags to add: `#astro` `#nextjs` `#web-performance`

---

#### 2. AI Travel Recommendation App
**Status:** Good concept, needs more technical substance.

**Current description:** "Serverless application using AWS Bedrock and Claude for personalized
travel recommendations. React frontend with Cognito authentication and Amplify CI/CD."

**Problems:**
- This reads like a bullet list from a resume, not a blog post. A recruiter reading this
  learns what tools you used but not *what you built*, *what was hard*, or *what you learned*.
- AWS Bedrock + Claude is directly relevant to your resume but you're not explaining the
  interesting technical parts: how did you prompt Claude? What was the Cognito auth flow?
  How did you structure the serverless backend?

**Fix — rewrite the intro paragraph to something like:**
> "Building a serverless AI app sounds straightforward until you hit the gap between
> 'call an LLM API' and 'build something a real user would trust with their travel plans.'
> This post covers how I structured prompt engineering for consistent recommendations,
> why I chose Amplify over a manual API Gateway setup, and what I'd do differently
> with Bedrock's newer model options."

**Add these sections if missing:**
- The prompt engineering approach (what system prompt structure you used)
- How Cognito user pools map to personalized recommendations
- A cost breakdown — serverless AI apps can get expensive, showing you thought about this signals maturity
- Tags to add: `#aws` `#bedrock` `#serverless` `#ai`

---

#### 3. ELT Pipeline with Medallion Architecture
**Status:** This is a core data engineering post — needs to be your strongest existing one.

**Current description:** "Production ELT pipeline implementing medallion architecture with
dbt transformations, dimensional modeling, and Airflow orchestration."

**Problems:**
- "Production ELT pipeline" — is this actually production? If it's a project, say
  "production-grade" or just describe what it does. Overstating this can backfire in
  interviews.
- The description doesn't say what *data* the pipeline processes or what the business
  question is. Data engineering posts without a business context feel academic.

**Fix — add a clear "what problem does this solve" opening:**
> "Most data engineering tutorials teach the medallion pattern in the abstract. This post
> walks through building it end-to-end with a real dataset — [dataset name], covering
> the decisions that don't show up in the docs: how to handle late-arriving data in the
> Silver layer, when to use incremental dbt models vs full refreshes, and how to structure
> Airflow DAGs so they're actually debuggable."

**Add if missing:**
- What dataset/domain (retail, financial, healthcare?)
- One code snippet showing your dbt incremental model config — this is the kind of detail
  that proves you actually built it
- A note on what "dimensional modeling" means in your specific context (Kimball star schema?
  how many fact/dim tables?)
- Tags: `#dbt` `#airflow` `#medallion-architecture` `#data-engineering`

---

#### 4. Real-Time Stock Market Data Pipeline
**Status:** Good project, description cuts off mid-sentence in the card.

**Current card description:** "Engineered end-to-end streaming pipeline capturing live stock
data from Finnhub API via Kafka producers, landing raw events in MinIO (S3-compatible storage)."
— it cuts off here on the card.

**Problems:**
- The card description ends abruptly. Visitors can't tell what the full scope is without
  clicking in.
- "Finnhub API via Kafka producers" is good but doesn't mention the dbt + Snowflake
  transformation layer or the Looker dashboards, which are the impressive parts.

**Fix the card summary to cover the full pipeline:**
> "End-to-end streaming pipeline ingesting real-time stock market data from the Finnhub API
> via Kafka into MinIO object storage. Implements medallion architecture with dbt
> transformations in Snowflake and Looker dashboards for both batch and real-time analytics."

**In the full post:**
- Add a latency measurement — how long from Kafka event to queryable in Snowflake?
- Explain the MinIO → Snowflake path (Snowpipe? COPY INTO? Direct connector?)
- Describe the dbt model structure — is it incremental? What's the grain of the fact table?
- Tags: `#kafka` `#snowflake` `#dbt` `#streaming` `#data-engineering`

---

#### 5. Real-Time Banking CDC Pipeline ⭐ Best existing post
**Status:** This is your strongest post. The architecture diagram thumbnail is correct.
The description is clear and specific.

**Minor fixes only:**
- Add a section comparing your Kafka + Debezium approach to the Snowflake-native CDC
  approach (hint: this sets up your pg_lake post nicely as a natural sequel)
- Mention the SCD Type-2 implementation specifically — this is a technical detail most
  junior engineers can't do and it's worth highlighting
- Add GitHub repo link prominently if not already there
- Tags to check: `#kafka` `#debezium` `#cdc` `#snowflake` `#dbt` `#data-engineering`

---

#### 6. Neuroimaging & Healthcare Data Lakehouse Platform ⭐ Second best post
**Status:** This is your most impressive work (real production, General Genomics) but the
description undersells it.

**Current description:** "Built production data platform at a genomics startup — multi-source
ingestion framework, Kubernetes infrastructure, data governance, and analytics serving layer."

**Problems:**
- This is *real production work* at a company, not a side project. It should read
  differently — more authoritative, more specific.
- "Multi-source ingestion framework" is vague. You ingested DICOM, NIfTI, FHIR, and
  hospitalization data from 15+ repositories. That specificity is impressive.
- "99.5% pipeline uptime" is on your resume — put it in the post.

**Fix the intro:**
> "At General Genomics, I architected the data platform from scratch — from raw neuroimaging
> files (DICOM, NIfTI) and clinical records (FHIR) across 15+ data repositories, to a
> Kubernetes-hosted lakehouse serving both ML workloads and business intelligence. This post
> covers the architecture decisions, what I'd do differently, and why we chose Delta Lake
> over Iceberg for this stack (spoiler: it's worth revisiting now)."

**Add these sections:**
- The DICOM/NIfTI ingestion challenge — most engineers have never touched medical imaging
  formats. Explain what they are and why they're hard to pipeline.
- The OpenMetadata governance setup — data lineage for HIPAA-adjacent data is a genuine
  technical challenge
- The Kubernetes Airflow setup — what Helm charts, what namespace strategy?
- A "what I'd change" section noting that you'd consider Iceberg now — this creates a
  natural link to your new posts
- Tags: `#kubernetes` `#delta-lake` `#airflow` `#healthcare` `#data-engineering`

---

## PART 2: PUBLISHING PREP FOR NEW POSTS

### Pre-publish checklist for both new posts

Before pushing either post live, go through this checklist:

**Content**
- [ ] Add "Work in progress — code coming soon" callout block near the top
- [ ] Verify all code snippets are syntactically correct (no copy-paste errors)
- [ ] Check all comparison tables render correctly in your MDX setup
- [ ] Confirm all external links work (docs pages, GitHub repos)

**Frontmatter (check your Astro config for required fields)**
```mdx
---
title: "..."
date: 2026-03-23
tags: [...]
category: "projects"
readTime: "X min"
summary: "..."
image: "./thumbnail.png"   ← ADD THIS — architecture diagram screenshot
draft: false
---
```

**Thumbnail**
- Create an architecture diagram for each post (instructions below)
- Export as PNG, add to your post's assets folder
- Reference it in frontmatter as `image`

---

### Creating Thumbnails (30 min total for both)

**Tool:** [Excalidraw](https://excalidraw.com) — free, no account needed, exports clean PNGs.

**For Post 1 (ngods-stocks):**
Draw a left-to-right flow:
```
[Yahoo Finance API] → [Python Ingestion] → [Apache Iceberg]
                                                   ↓
                                          [dbt Transforms]
                                                   ↓
                              [Cube.dev Semantic Layer] → [Metabase]
                                                   +
                              [Spark + ARIMA] → [Predictions]
```
Style tip: Use Excalidraw's dark background option. It'll match your site's dark theme.

**For Post 2 (pg_lake):**
Draw a vertical split:
```
LEFT SIDE (OLTP):              RIGHT SIDE (OLAP):
Snowflake Postgres             Snowflake Analytics
  + pg_lake extension    ←→    + External Volume
       ↓                              ↑
   Amazon S3 (Iceberg) ─────────────┘
   (shared data layer)
```
Label the S3 layer "Apache Iceberg on S3 — no ETL" to make the value prop clear at a glance.

---

### "Work in Progress" Callout Block

Add this near the top of both posts, right after the intro section. Remove it when you
complete the project and add the real code.

```mdx
:::note[Project Status]
This project is currently in progress. The architecture, concepts, and tool comparisons
in this post are complete. Code snippets and a link to the GitHub repo will be added
upon completion.
:::
```

If your Astro setup doesn't support `:::note` syntax, use a simple styled div:

```mdx
<div className="callout-note">
  <strong>Project Status:</strong> This architecture post is complete.
  Implementation code and GitHub repo link coming soon.
</div>
```

---

### Post 1 Final Tweaks Before Publishing (ngods-stocks)

The draft is strong. Three small additions before it goes live:

**1. Add a "Stack at a Glance" section right after the intro** — recruiters and engineers
skim to this first:

```mdx
## Stack at a Glance

| Layer | Tool |
|---|---|
| Orchestration | Dagster |
| Table Format | Apache Iceberg |
| Transformation | dbt |
| Semantic Layer | Cube.dev |
| BI / Dashboards | Metabase |
| ML / Forecasting | Apache Spark + ARIMA |
| Runtime | Docker Compose |
```

**2. Add a personal connection paragraph** — you built a similar system at General Genomics
with Delta Lake. One or two sentences connecting that real experience to why you chose this
project makes the post feel more authoritative:

> "I spent several months at General Genomics running Delta Lake on Kubernetes — a setup
> that worked well but required a lot of operational overhead. This project was partly an
> excuse to go deep on Iceberg and answer the question I'd been sitting on: in 2026, which
> open table format would I choose for a new project, and does the answer change based on
> the cloud or the engine?"

**3. Update the tags** to match your existing post conventions — looking at the Banking CDC
post, you use `#data-engineering` and `#kafka`. Keep the same casing and format across all
posts.

---

### Post 2 Final Tweaks Before Publishing (pg_lake Zero-ETL)

**1. Add a "Stack at a Glance" table** (same pattern as Post 1):

```mdx
## Stack at a Glance

| Layer | Tool |
|---|---|
| Transactional DB | Snowflake Postgres + pg_lake |
| Table Format | Apache Iceberg |
| Object Storage | Amazon S3 |
| Analytics Engine | Snowflake |
| Refresh Pipeline | Directory Stages + Streams + Tasks |
| Data Simulator | Python (psycopg2) |
```

**2. Add a natural link to your existing Banking CDC post** — this creates a "series" feel
on your blog and shows the evolution of your thinking:

> "If you've read my [Real-Time Banking CDC Pipeline post](/blog/banking-cdc-pipeline), you
> know I've built the Kafka + Debezium version of this pattern. This post is the other side
> of that coin — what the same CDC problem looks like when you stay entirely within the
> Snowflake ecosystem and trade operational complexity for managed simplicity."

**3. Add the cost callout** — this shows production awareness:

```mdx
:::warning[Cost Note]
The Snowflake Connector for PostgreSQL bills per table replicated and can accumulate
credits quickly at default sync frequency (every 5 minutes). If you're following along,
immediately run `CALL ENABLE_SCHEDULED_REPLICATION('PSQLDS1', '360 MINUTE')` to set
6-hour syncs during development. Monitor your credit usage in Snowsight.
:::
```

---

### Publishing Order Recommendation

Publish **Post 2 (pg_lake) first**, then **Post 1 (ngods-stocks)** one to two weeks later.

**Why Post 2 first:**
- It connects directly to your existing Banking CDC post, creating a natural series
- The Snowflake angle is more immediately relevant to recruiters scanning your profile
- It introduces Iceberg in a concrete, applied context — which primes readers for Post 1's
  deeper Iceberg vs Delta Lake comparison

**Why wait on Post 1:**
- ngods-stocks is a longer project to complete — you'll have real code to add sooner on
  the pg_lake project since the Snowflake quickstart is more guided
- Having two weeks between posts keeps your blog looking active rather than batch-published

---

## PART 3: QUICK PRIORITY CHECKLIST

### Do this week:
- [ ] Replace all river/road thumbnails with architecture diagrams or real screenshots
- [ ] Fix the Neuroimaging post description to reflect real production work
- [ ] Fix the Stock Market post card description (it cuts off)
- [ ] Create thumbnails for Post 1 and Post 2 in Excalidraw

### Do before publishing Post 2 (pg_lake):
- [ ] Add "Stack at a Glance" table
- [ ] Add "Work in Progress" callout
- [ ] Add link to Banking CDC post
- [ ] Add cost warning callout
- [ ] Add thumbnail to frontmatter

### Do before publishing Post 1 (ngods-stocks):
- [ ] Add "Stack at a Glance" table
- [ ] Add personal connection paragraph (General Genomics / Delta Lake context)
- [ ] Add "Work in Progress" callout
- [ ] Add thumbnail to frontmatter
