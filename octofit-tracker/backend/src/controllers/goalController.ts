import { Request, Response } from 'express'
import Goal from '../models/Goal'

export const getGoalsByUserId = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params
    const goals = await Goal.find({ userId }).sort({ deadline: 1 })
    res.json(goals)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch goals' })
  }
}

export const getGoalById = async (req: Request, res: Response) => {
  try {
    const goal = await Goal.findById(req.params.id)
    if (!goal) {
      return res.status(404).json({ error: 'Goal not found' })
    }
    res.json(goal)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch goal' })
  }
}

export const createGoal = async (req: Request, res: Response) => {
  try {
    const { userId, title, description, targetValue, currentValue, unit, deadline } = req.body

    const goal = new Goal({
      userId,
      title,
      description,
      targetValue,
      currentValue: currentValue || 0,
      unit,
      deadline: new Date(deadline),
    })

    await goal.save()
    res.status(201).json(goal)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create goal' })
  }
}

export const updateGoal = async (req: Request, res: Response) => {
  try {
    const goal = await Goal.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (!goal) {
      return res.status(404).json({ error: 'Goal not found' })
    }
    res.json(goal)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update goal' })
  }
}

export const deleteGoal = async (req: Request, res: Response) => {
  try {
    const goal = await Goal.findByIdAndDelete(req.params.id)
    if (!goal) {
      return res.status(404).json({ error: 'Goal not found' })
    }
    res.json({ message: 'Goal deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete goal' })
  }
}
