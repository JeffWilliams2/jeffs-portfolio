---
name: 'AI Travel Recommendation App'
description: 'Serverless application using AWS Bedrock and Claude for personalized travel recommendations. React frontend with Cognito authentication.'
tags: ['aws', 'bedrock', 'react', 'lambda', 'cognito']
link: 'https://github.com/JeffWilliams2'
startDate: '2025-04-01'
---

## What I Built

A serverless web app that generates personalized travel recommendations using AWS Bedrock's Claude model. Users input their preferences and get AI-generated destination suggestions with itineraries.

## Architecture

**Frontend**: React with TypeScript. Clean UI for inputting travel preferences (interests, budget, duration, style).

**Backend**: AWS Lambda functions handle API requests and call AWS Bedrock. API Gateway exposes REST endpoints.

**Authentication**: Amazon Cognito for user sign-up/login. JWT tokens secure API requests.

**AI Integration**: AWS Bedrock with Claude 3 Sonnet. Prompt engineering for structured travel recommendations.

```python
# Lambda function calling Bedrock
response = bedrock.invoke_model(
    modelId='anthropic.claude-3-sonnet-20240229-v1:0',
    body=json.dumps({
        'messages': [{
            'role': 'user',
            'content': f"""
            Generate travel recommendations for:
            - Interests: {interests}
            - Budget: {budget}
            - Duration: {duration} days
            
            Include: destinations, activities, budget breakdown
            """
        }]
    })
)
```

## Key Decisions

**Why Serverless?** Pay-per-use pricing, no server management, automatic scaling. Perfect for variable traffic patterns.

**Why AWS Bedrock?** Managed LLM service with enterprise security. No need to manage model infrastructure.

**Why Cognito?** Integrated with AWS ecosystem. Handles auth complexity (MFA, password policies, token refresh).

## Results

- Working end-to-end AI application
- Sub-second response times for recommendations
- Scalable to thousands of concurrent users
- Zero infrastructure to maintain

## Key Technologies

AWS Bedrock, Claude, Lambda, API Gateway, Cognito, React, TypeScript
