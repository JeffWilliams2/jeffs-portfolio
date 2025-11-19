---
name: 'AI Travel Destination Generator'
description: 'Serverless web application leveraging AWS Bedrock and Claude 3 Sonnet to deliver personalized travel recommendations through ML-powered natural language processing and ETL pipeline automation.'
tags: ['aws', 'bedrock', 'claude', 'react', 'typescript', 'lambda', 'machine-learning', 'ai']
link: 'https://github.com/JeffWilliams2'
startDate: '2025-04-01'
---

# AI Travel Destination Generator

## Overview

Engineered serverless web application leveraging AWS Bedrock and Claude 3 Sonnet to deliver personalized travel recommendations through ML-powered natural language processing. Features secure authentication with Amazon Cognito and responsive UI built with React and TypeScript.

## Key Features

### 🤖 AI-Powered Recommendations
- **Claude 3 Sonnet** integration via AWS Bedrock
- Natural language processing for user preferences
- Intelligent travel destination matching
- Personalized itinerary generation
- Context-aware suggestions

### ☁️ Serverless Architecture
- **AWS Lambda** for backend processing
- **Amazon Bedrock** for LLM inference
- **Amazon Cognito** for secure authentication
- **API Gateway** for RESTful endpoints
- Auto-scaling and pay-per-use pricing

### 💻 Modern Frontend
- **React** with TypeScript
- Responsive UI components
- Real-time AI interactions
- Clean, intuitive design

## Technical Architecture

```
┌─────────────────────────────────────┐
│         User Interface              │
│    (React + TypeScript)             │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│    Amazon Cognito Authentication    │
│         (JWT Tokens)                │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│        API Gateway                  │
│    (RESTful Endpoints)              │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│        AWS Lambda Functions         │
│                                     │
│  ┌───────────────────────────────┐ │
│  │  Process User Preferences     │ │
│  └─────────┬─────────────────────┘ │
│            │                        │
│            ▼                        │
│  ┌───────────────────────────────┐ │
│  │    AWS Bedrock Integration    │ │
│  │   (Claude 3 Sonnet Model)     │ │
│  └─────────┬─────────────────────┘ │
│            │                        │
│            ▼                        │
│  ┌───────────────────────────────┐ │
│  │  Generate Recommendations     │ │
│  └───────────────────────────────┘ │
└─────────────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│    Personalized Travel Response     │
│     (JSON to Frontend)              │
└─────────────────────────────────────┘
```

## Implementation Details

### Frontend (React + TypeScript)

**Component Structure:**
```typescript
interface TravelPreferences {
  interests: string[];
  budget: string;
  duration: number;
  travelStyle: string;
}

const TravelGenerator: React.FC = () => {
  const [preferences, setPreferences] = 
    useState<TravelPreferences>();
  const [recommendations, setRecommendations] = 
    useState<string>();
  
  const generateDestination = async () => {
    const response = await fetch(
      '/api/generate',
      {
        method: 'POST',
        body: JSON.stringify(preferences)
      }
    );
    const data = await response.json();
    setRecommendations(data.destination);
  };
  
  return (
    <div>
      {/* UI Components */}
    </div>
  );
};
```

### Backend (AWS Lambda)

**Lambda Function:**
```python
import boto3
import json

bedrock = boto3.client('bedrock-runtime')

def lambda_handler(event, context):
    # Parse user preferences
    preferences = json.loads(event['body'])
    
    # Construct prompt for Claude
    prompt = f"""
    Generate personalized travel recommendations:
    - Interests: {preferences['interests']}
    - Budget: {preferences['budget']}
    - Duration: {preferences['duration']} days
    - Travel Style: {preferences['travelStyle']}
    
    Provide detailed destination suggestions with:
    1. Recommended locations
    2. Activities matching interests
    3. Budget breakdown
    4. Best time to visit
    """
    
    # Call AWS Bedrock with Claude 3 Sonnet
    response = bedrock.invoke_model(
        modelId='anthropic.claude-3-sonnet-20240229-v1:0',
        body=json.dumps({
            'anthropic_version': 'bedrock-2023-05-31',
            'max_tokens': 2000,
            'messages': [{
                'role': 'user',
                'content': prompt
            }]
        })
    )
    
    # Parse and return recommendations
    result = json.loads(response['body'].read())
    destination = result['content'][0]['text']
    
    return {
        'statusCode': 200,
        'body': json.dumps({
            'destination': destination
        })
    }
```

### Authentication (Amazon Cognito)

**User Flow:**
1. User signs up / logs in
2. Cognito issues JWT tokens
3. Frontend includes token in API requests
4. API Gateway validates token
5. Lambda function executes

**Security Features:**
- Secure password policies
- MFA support
- Token-based authentication
- Role-based access control

## ML & AI Integration

### AWS Bedrock with Claude 3 Sonnet

**Model Capabilities:**
- Advanced natural language understanding
- Context-aware responses
- Multi-turn conversations
- Structured output generation

**Prompt Engineering:**
```python
# Optimized prompt structure
system_prompt = """
You are an expert travel advisor. Analyze user 
preferences and provide personalized destination 
recommendations with detailed itineraries.
"""

user_prompt = f"""
User Profile:
- Interests: {interests}
- Budget: {budget}
- Style: {travel_style}

Provide:
1. Top 3 destinations
2. Daily itinerary suggestions  
3. Budget breakdown
4. Local tips
"""
```

### ETL Pipeline Automation

**Data Flow:**
1. User input collection
2. Data validation and sanitization
3. Transformation for ML model
4. Bedrock API invocation
5. Response parsing and formatting
6. Frontend rendering

## Key Features

### 1. Intelligent Recommendations
- Personalized based on preferences
- Budget-conscious suggestions
- Activity matching
- Seasonal considerations

### 2. Secure Authentication
- Amazon Cognito integration
- JWT token management
- User session handling
- Password security

### 3. Responsive Design
- Mobile-friendly interface
- Fast load times
- Smooth interactions
- Accessible UI

## Technologies Used

```
Frontend:       React, TypeScript
Backend:        AWS Lambda (Python)
AI/ML:          AWS Bedrock, Claude 3 Sonnet
Authentication: Amazon Cognito
API:            API Gateway, REST
Deployment:     Serverless Framework
Infrastructure: CloudFormation
```

## Performance & Scalability

**Serverless Benefits:**
- Auto-scaling based on demand
- Pay-per-request pricing
- No server management
- High availability

**Optimization:**
- Lambda cold start optimization
- API Gateway caching
- Efficient prompt design
- Response streaming

## Development Workflow

### Local Development
```bash
# Frontend
cd frontend
npm install
npm run dev

# Backend (SAM Local)
cd backend
sam local start-api
```

### Deployment
```bash
# Deploy infrastructure
aws cloudformation deploy \
  --template-file template.yaml \
  --stack-name travel-generator

# Deploy frontend
cd frontend && npm run build
aws s3 sync dist/ s3://travel-app-bucket/
```

## Key Achievements

✅ Built production ML-powered application  
✅ Integrated Claude 3 Sonnet via AWS Bedrock  
✅ Implemented secure serverless architecture  
✅ Created intuitive React TypeScript UI  
✅ Automated ETL pipeline processing  
✅ Deployed scalable cloud infrastructure  

## Technical Skills Demonstrated

- **AI/ML**: LLM integration, prompt engineering
- **Cloud Architecture**: Serverless design patterns
- **Full-Stack**: React frontend, Lambda backend
- **Security**: Cognito authentication, IAM
- **API Development**: RESTful design
- **DevOps**: Infrastructure as code

## Future Enhancements

- [ ] Multi-language support
- [ ] Image generation for destinations
- [ ] User preference learning
- [ ] Social sharing features
- [ ] Booking integration
- [ ] Mobile app version

## Project Significance

This project demonstrates:
- Modern AI/ML application development
- Serverless cloud architecture expertise
- Full-stack development capabilities
- AWS service integration
- Production-ready application design
- User experience focus
