import { Request, Response } from 'express'
import Workout from '../models/Workout'

export const getWorkoutsByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const workouts = await Workout.find({ userId }).sort({ date: -1 })
    res.json(workouts)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch workouts' })
  }
}

export const getWorkoutById = async (req: Request, res: Response) => {
  try {
    const workout = await Workout.findById(req.params.id)
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' })
    }
    res.json(workout)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch workout' })
  }
}

export const createWorkout = async (req: Request, res: Response) => {
  try {
    const { userId, name, type, duration, caloriesBurned, intensity, date, notes } = req.body

    const workout = new Workout({
      userId,
      name,
      type,
      duration,
      caloriesBurned,
      intensity,
      date: new Date(date),
      notes,
    })

    await workout.save()
    res.status(201).json(workout)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create workout' })
  }
}

export const updateWorkout = async (req: Request, res: Response) => {
  try {
    const workout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' })
    }
    res.json(workout)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update workout' })
  }
}

export const deleteWorkout = async (req: Request, res: Response) => {
  try {
    const workout = await Workout.findByIdAndDelete(req.params.id)
    if (!workout) {
      return res.status(404).json({ error: 'Workout not found' })
    }
    res.json({ message: 'Workout deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete workout' })
  }
}
