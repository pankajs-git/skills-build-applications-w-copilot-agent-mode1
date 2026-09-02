import mongoose, { Schema, Document } from 'mongoose'

export interface IExercise extends Document {
  workoutId: mongoose.Types.ObjectId
  name: string
  sets: number
  reps: number
  weight?: number
  duration?: number
  createdAt: Date
  updatedAt: Date
}

const ExerciseSchema = new Schema<IExercise>(
  {
    workoutId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Workout',
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    sets: {
      type: Number,
      required: true,
      min: 1,
    },
    reps: {
      type: Number,
      required: true,
      min: 1,
    },
    weight: {
      type: Number,
      default: null,
    },
    duration: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
)

export default mongoose.model<IExercise>('Exercise', ExerciseSchema)
