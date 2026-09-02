import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from './models/User'
import Workout from './models/Workout'
import Goal from './models/Goal'

dotenv.config()

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit-tracker'

const seedDatabase = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(MONGODB_URI)
    console.log('Connected to MongoDB for seeding')

    // Clear existing data
    await User.deleteMany({})
    await Workout.deleteMany({})
    await Goal.deleteMany({})
    console.log('Cleared existing data')

    // Create sample users
    const users = await User.insertMany([
      {
        username: 'octofit-user1',
        email: 'user1@octofit.com',
        password: 'hashedpassword123',
        firstName: 'Alex',
        lastName: 'Runner',
        fitnessGoal: 'endurance',
      },
      {
        username: 'octofit-user2',
        email: 'user2@octofit.com',
        password: 'hashedpassword456',
        firstName: 'Jordan',
        lastName: 'Lifter',
        fitnessGoal: 'muscle-gain',
      },
      {
        username: 'octofit-user3',
        email: 'user3@octofit.com',
        password: 'hashedpassword789',
        firstName: 'Casey',
        lastName: 'Trainer',
        fitnessGoal: 'general-fitness',
      },
    ])
    console.log(`Created ${users.length} users`)

    // Create sample workouts
    const workouts = await Workout.insertMany([
      {
        userId: users[0]._id,
        name: 'Morning Run',
        type: 'cardio',
        duration: 30,
        caloriesBurned: 350,
        intensity: 'high',
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        notes: 'Great morning run along the park',
      },
      {
        userId: users[0]._id,
        name: 'Evening Jog',
        type: 'cardio',
        duration: 20,
        caloriesBurned: 200,
        intensity: 'medium',
        date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        notes: 'Easy paced jog',
      },
      {
        userId: users[1]._id,
        name: 'Chest Day',
        type: 'strength',
        duration: 45,
        caloriesBurned: 280,
        intensity: 'high',
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        notes: 'Focused on bench press and incline exercises',
      },
      {
        userId: users[1]._id,
        name: 'Leg Day',
        type: 'strength',
        duration: 50,
        caloriesBurned: 320,
        intensity: 'high',
        date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        notes: 'Squats, lunges, and leg press',
      },
      {
        userId: users[2]._id,
        name: 'Yoga Session',
        type: 'flexibility',
        duration: 60,
        caloriesBurned: 120,
        intensity: 'low',
        date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        notes: 'Relaxing yoga and meditation',
      },
    ])
    console.log(`Created ${workouts.length} workouts`)

    // Create sample goals
    const goals = await Goal.insertMany([
      {
        userId: users[0]._id,
        title: 'Run a Marathon',
        description: 'Complete a full marathon (42.2 km)',
        targetValue: 42.2,
        currentValue: 15.5,
        unit: 'km',
        deadline: new Date(Date.now() + 180 * 24 * 60 * 60 * 1000),
        status: 'active',
      },
      {
        userId: users[1]._id,
        title: 'Bench Press 100kg',
        description: 'Achieve a 100kg bench press',
        targetValue: 100,
        currentValue: 75,
        unit: 'kg',
        deadline: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000),
        status: 'active',
      },
      {
        userId: users[2]._id,
        title: 'Workout 3 Times Weekly',
        description: 'Maintain a consistent workout routine',
        targetValue: 156,
        currentValue: 45,
        unit: 'workouts',
        deadline: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
        status: 'active',
      },
    ])
    console.log(`Created ${goals.length} goals`)

    console.log('✅ Database seeding completed successfully!')
    process.exit(0)
  } catch (error) {
    console.error('❌ Error seeding database:', error)
    process.exit(1)
  }
}

seedDatabase()
