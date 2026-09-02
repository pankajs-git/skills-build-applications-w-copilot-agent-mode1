import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import userRoutes from './routes/users'
import workoutRoutes from './routes/workouts'
import goalRoutes from './routes/goals'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 8000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit-tracker'

// Middleware
app.use(cors())
app.use(express.json())

// Database Connection
mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error)
  })

// Routes
app.get('/health', (req, res) => {
  res.json({ status: 'OctoFit Tracker API is running' })
})

// API Routes
app.use('/api/users', userRoutes)
app.use('/api/workouts', workoutRoutes)
app.use('/api/goals', goalRoutes)

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal server error' })
})

// Start Server
app.listen(PORT, () => {
  console.log(`🐙 OctoFit Tracker Backend running on port ${PORT}`)
})
