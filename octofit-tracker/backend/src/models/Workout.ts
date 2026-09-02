import mongoose, { Schema, Document } from 'mongoose'

export interface IWorkout extends Document {
  userId: mongoose.Types.ObjectId
  name: string
  type: string
  duration: number
  caloriesBurned: number
  intensity: 'low' | 'medium' | 'high'
  date: Date
  notes: string
  createdAt: Date
  updatedAt: Date
}

const WorkoutSchema = new Schema<IWorkout>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ['cardio', 'strength', 'flexibility', 'sports', 'other'],
      required: true,
    },
    duration: {
      type: Number,
      required: true,
      min: 1,
    },
    caloriesBurned: {
      type: Number,
      required: true,
      min: 0,
    },
    intensity: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium',
    },
    date: {
      type: Date,
      required: true,
    },
    notes: {
      type: String,
      default: '',
    },
  },
  { timestamps: true }
)

export default mongoose.model<IWorkout>('Workout', WorkoutSchema)
