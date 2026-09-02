import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  username: string
  email: string
  password: string
  firstName: string
  lastName: string
  fitnessGoal: string
  createdAt: Date
  updatedAt: Date
}

const UserSchema = new Schema<IUser>(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Please enter a valid email'],
    },
    password: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    fitnessGoal: {
      type: String,
      enum: ['weight-loss', 'muscle-gain', 'endurance', 'flexibility', 'general-fitness'],
      default: 'general-fitness',
    },
  },
  { timestamps: true }
)

export default mongoose.model<IUser>('User', UserSchema)
