import mongoose, { Schema, Document } from 'mongoose'

export interface IGoal extends Document {
  userId: mongoose.Types.ObjectId
  title: string
  description: string
  targetValue: number
  currentValue: number
  unit: string
  deadline: Date
  status: 'active' | 'completed' | 'cancelled'
  createdAt: Date
  updatedAt: Date
}

const GoalSchema = new Schema<IGoal>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    targetValue: {
      type: Number,
      required: true,
    },
    currentValue: {
      type: Number,
      default: 0,
    },
    unit: {
      type: String,
      required: true,
    },
    deadline: {
      type: Date,
      required: true,
    },
    status: {
      type: String,
      enum: ['active', 'completed', 'cancelled'],
      default: 'active',
    },
  },
  { timestamps: true }
)

export default mongoose.model<IGoal>('Goal', GoalSchema)
