import { Request, Response } from 'express'
import User from '../models/User'

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await User.find().select('-password')
    res.json(users)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' })
  }
}

export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.params.id).select('-password')
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch user' })
  }
}

export const createUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password, firstName, lastName, fitnessGoal } = req.body

    const existingUser = await User.findOne({ $or: [{ username }, { email }] })
    if (existingUser) {
      return res.status(400).json({ error: 'Username or email already exists' })
    }

    const user = new User({
      username,
      email,
      password,
      firstName,
      lastName,
      fitnessGoal,
    })

    await user.save()
    const userResponse = user.toObject()
    delete userResponse.password
    res.status(201).json(userResponse)
  } catch (error) {
    res.status(500).json({ error: 'Failed to create user' })
  }
}

export const updateUser = async (req: Request, res: Response) => {
  try {
    const updates = req.body
    const user = await User.findByIdAndUpdate(req.params.id, updates, { new: true }).select(
      '-password'
    )
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json(user)
  } catch (error) {
    res.status(500).json({ error: 'Failed to update user' })
  }
}

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id)
    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }
    res.json({ message: 'User deleted successfully' })
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete user' })
  }
}
