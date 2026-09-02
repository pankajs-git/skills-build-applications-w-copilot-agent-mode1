# OctoFit Tracker - API Testing Guide

This guide provides curl commands to test the OctoFit Tracker API endpoints.

## Environment Setup

### Localhost
```bash
# Backend URL
http://localhost:8000

# API Base URL
http://localhost:8000/api
```

### Codespaces
```bash
# Backend URL
https://$CODESPACE_NAME-8000.app.github.dev

# API Base URL
https://$CODESPACE_NAME-8000.app.github.dev/api
```

---

## API Endpoints

### Health & Info Endpoints

#### Check API Health
```bash
# Localhost
curl http://localhost:8000/health

# Codespaces
curl https://$CODESPACE_NAME-8000.app.github.dev/health
```

**Expected Response:**
```json
{
  "status": "OctoFit Tracker API is running"
}
```

#### Get API Info
```bash
# Localhost
curl http://localhost:8000/info

# Codespaces
curl https://$CODESPACE_NAME-8000.app.github.dev/info
```

**Expected Response:**
```json
{
  "message": "🐙 OctoFit Tracker Backend",
  "environment": {
    "environment": "localhost",
    "apiBaseUrl": "http://localhost:8000",
    "port": 8000,
    "codespaceName": "N/A"
  },
  "apiBaseUrl": "http://localhost:8000"
}
```

---

## Users API

### Get All Users
```bash
# Localhost
curl http://localhost:8000/api/users

# Codespaces
curl https://$CODESPACE_NAME-8000.app.github.dev/api/users
```

**Expected Response:**
```json
[
  {
    "_id": "...",
    "username": "octofit-user1",
    "email": "user1@octofit.com",
    "firstName": "Alex",
    "lastName": "Runner",
    "fitnessGoal": "endurance",
    "createdAt": "...",
    "updatedAt": "..."
  },
  ...
]
```

### Create a New User
```bash
# Localhost
curl -X POST http://localhost:8000/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "username": "newuser",
    "email": "newuser@octofit.com",
    "password": "password123",
    "firstName": "New",
    "lastName": "User",
    "fitnessGoal": "weight-loss"
  }'

# Codespaces
curl -X POST https://$CODESPACE_NAME-8000.app.github.dev/api/users \
  -H "Content-Type: application/json" \
  -d '{
    "username": "newuser",
    "email": "newuser@octofit.com",
    "password": "password123",
    "firstName": "New",
    "lastName": "User",
    "fitnessGoal": "weight-loss"
  }'
```

### Get User by ID
Replace `USER_ID` with an actual user ID from the users list.

```bash
# Localhost
curl http://localhost:8000/api/users/USER_ID

# Codespaces
curl https://$CODESPACE_NAME-8000.app.github.dev/api/users/USER_ID
```

### Update User
```bash
# Localhost
curl -X PUT http://localhost:8000/api/users/USER_ID \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Updated",
    "lastName": "Name"
  }'

# Codespaces
curl -X PUT https://$CODESPACE_NAME-8000.app.github.dev/api/users/USER_ID \
  -H "Content-Type: application/json" \
  -d '{
    "firstName": "Updated",
    "lastName": "Name"
  }'
```

### Delete User
```bash
# Localhost
curl -X DELETE http://localhost:8000/api/users/USER_ID

# Codespaces
curl -X DELETE https://$CODESPACE_NAME-8000.app.github.dev/api/users/USER_ID
```

---

## Workouts API

### Get All Workouts for a User
Replace `USER_ID` with an actual user ID.

```bash
# Localhost
curl http://localhost:8000/api/workouts/user/USER_ID

# Codespaces
curl https://$CODESPACE_NAME-8000.app.github.dev/api/workouts/user/USER_ID
```

**Expected Response:**
```json
[
  {
    "_id": "...",
    "userId": "USER_ID",
    "name": "Morning Run",
    "type": "cardio",
    "duration": 30,
    "caloriesBurned": 350,
    "intensity": "high",
    "date": "...",
    "notes": "Great morning run along the park",
    "createdAt": "...",
    "updatedAt": "..."
  },
  ...
]
```

### Create a Workout
```bash
# Localhost
curl -X POST http://localhost:8000/api/workouts \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "USER_ID",
    "name": "Evening Cycling",
    "type": "cardio",
    "duration": 45,
    "caloriesBurned": 400,
    "intensity": "medium",
    "date": "2026-09-02T19:00:00Z",
    "notes": "Great cycling session"
  }'

# Codespaces
curl -X POST https://$CODESPACE_NAME-8000.app.github.dev/api/workouts \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "USER_ID",
    "name": "Evening Cycling",
    "type": "cardio",
    "duration": 45,
    "caloriesBurned": 400,
    "intensity": "medium",
    "date": "2026-09-02T19:00:00Z",
    "notes": "Great cycling session"
  }'
```

### Get Workout by ID
```bash
# Localhost
curl http://localhost:8000/api/workouts/WORKOUT_ID

# Codespaces
curl https://$CODESPACE_NAME-8000.app.github.dev/api/workouts/WORKOUT_ID
```

### Update Workout
```bash
# Localhost
curl -X PUT http://localhost:8000/api/workouts/WORKOUT_ID \
  -H "Content-Type: application/json" \
  -d '{
    "duration": 50,
    "caloriesBurned": 420
  }'

# Codespaces
curl -X PUT https://$CODESPACE_NAME-8000.app.github.dev/api/workouts/WORKOUT_ID \
  -H "Content-Type: application/json" \
  -d '{
    "duration": 50,
    "caloriesBurned": 420
  }'
```

### Delete Workout
```bash
# Localhost
curl -X DELETE http://localhost:8000/api/workouts/WORKOUT_ID

# Codespaces
curl -X DELETE https://$CODESPACE_NAME-8000.app.github.dev/api/workouts/WORKOUT_ID
```

---

## Goals API

### Get All Goals for a User
Replace `USER_ID` with an actual user ID.

```bash
# Localhost
curl http://localhost:8000/api/goals/user/USER_ID

# Codespaces
curl https://$CODESPACE_NAME-8000.app.github.dev/api/goals/user/USER_ID
```

**Expected Response:**
```json
[
  {
    "_id": "...",
    "userId": "USER_ID",
    "title": "Run a Marathon",
    "description": "Complete a full marathon (42.2 km)",
    "targetValue": 42.2,
    "currentValue": 15.5,
    "unit": "km",
    "deadline": "...",
    "status": "active",
    "createdAt": "...",
    "updatedAt": "..."
  },
  ...
]
```

### Create a Goal
```bash
# Localhost
curl -X POST http://localhost:8000/api/goals \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "USER_ID",
    "title": "Lose 5kg",
    "description": "Lose 5 kg in 3 months",
    "targetValue": 5,
    "currentValue": 0,
    "unit": "kg",
    "deadline": "2026-12-02T00:00:00Z"
  }'

# Codespaces
curl -X POST https://$CODESPACE_NAME-8000.app.github.dev/api/goals \
  -H "Content-Type: application/json" \
  -d '{
    "userId": "USER_ID",
    "title": "Lose 5kg",
    "description": "Lose 5 kg in 3 months",
    "targetValue": 5,
    "currentValue": 0,
    "unit": "kg",
    "deadline": "2026-12-02T00:00:00Z"
  }'
```

### Get Goal by ID
```bash
# Localhost
curl http://localhost:8000/api/goals/GOAL_ID

# Codespaces
curl https://$CODESPACE_NAME-8000.app.github.dev/api/goals/GOAL_ID
```

### Update Goal
```bash
# Localhost
curl -X PUT http://localhost:8000/api/goals/GOAL_ID \
  -H "Content-Type: application/json" \
  -d '{
    "currentValue": 2.5,
    "status": "active"
  }'

# Codespaces
curl -X PUT https://$CODESPACE_NAME-8000.app.github.dev/api/goals/GOAL_ID \
  -H "Content-Type: application/json" \
  -d '{
    "currentValue": 2.5,
    "status": "active"
  }'
```

### Delete Goal
```bash
# Localhost
curl -X DELETE http://localhost:8000/api/goals/GOAL_ID

# Codespaces
curl -X DELETE https://$CODESPACE_NAME-8000.app.github.dev/api/goals/GOAL_ID
```

---

## Quick Test Script

Save this as `test-api.sh` and run with `bash test-api.sh`:

```bash
#!/bin/bash

# Set base URL (change to Codespaces URL if needed)
BASE_URL="http://localhost:8000"

echo "🐙 OctoFit Tracker API Testing"
echo "================================"
echo "Base URL: $BASE_URL"
echo ""

# Test health endpoint
echo "1. Testing Health Endpoint..."
curl -s "$BASE_URL/health" | jq .
echo ""

# Test info endpoint
echo "2. Testing Info Endpoint..."
curl -s "$BASE_URL/info" | jq .
echo ""

# Test users endpoint
echo "3. Testing Users Endpoint..."
curl -s "$BASE_URL/api/users" | jq .
echo ""

echo "✅ API Testing Complete!"
```

---

## Troubleshooting

### Connection Refused
- Ensure backend is running: `npm run dev` in `octofit-tracker/backend`
- Verify port 8000 is accessible
- For Codespaces, check the environment name is correct

### CORS Errors
- Backend CORS middleware is configured for all origins
- Verify frontend is making requests to the correct API URL

### MongoDB Connection Errors
- Ensure MongoDB is running on port 27017
- Check `MONGODB_URI` in `.env` file

### Invalid JSON Response
- Ensure `Content-Type: application/json` header is set
- Check request body is valid JSON
