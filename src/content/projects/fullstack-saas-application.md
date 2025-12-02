---
name: 'Full-Stack SaaS Application'
description: 'Multi-tenant web application with Next.js, Supabase, and Stripe. Features AI document processing, authentication, and subscription management.'
tags: ['nextjs', 'react', 'postgresql', 'supabase', 'stripe']
link: 'https://github.com/JeffWilliams2'
startDate: '2024-01-01'
---

## What I'm Building

A production SaaS application to learn full-stack development end-to-end—from authentication to payments to deployment.

## Core Features

**Authentication**: Supabase Auth with email/password and OAuth. JWT-based sessions with automatic refresh.

**Multi-Tenancy**: Row-level security (RLS) in PostgreSQL ensures users only see their own data. Each tenant is completely isolated.

```sql
CREATE POLICY tenant_isolation ON documents
  USING (tenant_id = auth.uid());
```

**Payments**: Stripe integration for subscriptions. Webhook handling for payment events, subscription changes, and failed payments.

**AI Features**: Document processing with OpenAI APIs. Using LangChain for structured data extraction from uploaded files.

## Technical Stack

**Frontend**: Next.js 14 with App Router, TypeScript, Tailwind CSS. Server components for initial load, client components for interactivity.

**Backend**: Supabase for database (PostgreSQL), auth, and file storage. Edge functions for serverless API routes.

**Infrastructure**: Deployed on Vercel with automatic previews for PRs. Environment-based configuration for dev/staging/prod.

## Key Learnings

- Row-level security is powerful but requires careful policy design
- Stripe webhooks need idempotency handling
- Server components reduce client-side JavaScript significantly
- TypeScript catches bugs before they reach production

## Current Status

Actively developing. Core auth, database, and payment flows working. Building out AI features and refining the UI.

## Key Technologies

Next.js, React, TypeScript, PostgreSQL, Supabase, Stripe, OpenAI, Vercel
