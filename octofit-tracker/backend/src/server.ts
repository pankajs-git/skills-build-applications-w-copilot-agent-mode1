import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import apiConfig from './config/api';
import db from './config/database';

const app: Express = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'OK', message: 'Backend server is running' });
});

// API Routes

/**
 * GET /api/users
 * Returns a list of users
 */
app.get('/api/users', (req: Request, res: Response) => {
  try {
    // TODO: Fetch users from database
    // Placeholder response for testing
    res.json([
      {
        id: '1',
        name: 'Alice Johnson',
        email: 'alice@example.com',
        avatar: 'https://avatars.githubusercontent.com/u/1?v=4',
      },
      {
        id: '2',
        name: 'Bob Smith',
        email: 'bob@example.com',
        avatar: 'https://avatars.githubusercontent.com/u/2?v=4',
      },
      {
        id: '3',
        name: 'Charlie Brown',
        email: 'charlie@example.com',
        avatar: 'https://avatars.githubusercontent.com/u/3?v=4',
      },
    ]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

/**
 * GET /api/activities
 * Returns a list of activities
 */
app.get('/api/activities', (req: Request, res: Response) => {
  try {
    // TODO: Fetch activities from database
    // Placeholder response for testing
    res.json([
      {
        id: '1',
        userId: '1',
        type: 'running',
        distance: 5.2,
        duration: 32,
        date: '2026-09-11',
        calories: 450,
      },
      {
        id: '2',
        userId: '2',
        type: 'cycling',
        distance: 15.3,
        duration: 45,
        date: '2026-09-11',
        calories: 520,
      },
      {
        id: '3',
        userId: '1',
        type: 'swimming',
        distance: 2.5,
        duration: 40,
        date: '2026-09-10',
        calories: 380,
      },
    ]);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch activities' });
  }
});

/**
 * Error handling middleware
 */
app.use((err: any, req: Request, res: Response) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

// Start server
const PORT = apiConfig.port;
app.listen(PORT, () => {
  console.log(`🚀 Backend server is running on port ${PORT}`);
  console.log(`📍 API Base URL: ${apiConfig.baseUrl}`);
  console.log(`🔗 Test endpoints:`);
  console.log(`   - ${apiConfig.baseUrl}/health`);
  console.log(`   - ${apiConfig.baseUrl}/api/users`);
  console.log(`   - ${apiConfig.baseUrl}/api/activities`);
});

export default app;
