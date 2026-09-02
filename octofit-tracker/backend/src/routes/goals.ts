import express from 'express'
import {
  getGoalsByUserId,
  getGoalById,
  createGoal,
  updateGoal,
  deleteGoal,
} from '../controllers/goalController'

const router = express.Router()

router.get('/user/:userId', getGoalsByUserId)
router.get('/:id', getGoalById)
router.post('/', createGoal)
router.put('/:id', updateGoal)
router.delete('/:id', deleteGoal)

export default router
