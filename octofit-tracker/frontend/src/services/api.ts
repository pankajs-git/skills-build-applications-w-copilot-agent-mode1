import axios from 'axios'
import { API_ENDPOINTS } from '../config/api'

const apiClient = axios.create({
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// User endpoints
export const getUsersApi = () => apiClient.get(API_ENDPOINTS.users)
export const getUserById = (id: string) => apiClient.get(`${API_ENDPOINTS.users}/${id}`)
export const createUser = (userData: any) => apiClient.post(API_ENDPOINTS.users, userData)
export const updateUser = (id: string, userData: any) =>
  apiClient.put(`${API_ENDPOINTS.users}/${id}`, userData)
export const deleteUser = (id: string) => apiClient.delete(`${API_ENDPOINTS.users}/${id}`)

// Workout endpoints
export const getWorkoutsByUserId = (userId: string) =>
  apiClient.get(`${API_ENDPOINTS.workouts}/user/${userId}`)
export const getWorkoutById = (id: string) => apiClient.get(`${API_ENDPOINTS.workouts}/${id}`)
export const createWorkout = (workoutData: any) =>
  apiClient.post(API_ENDPOINTS.workouts, workoutData)
export const updateWorkout = (id: string, workoutData: any) =>
  apiClient.put(`${API_ENDPOINTS.workouts}/${id}`, workoutData)
export const deleteWorkout = (id: string) =>
  apiClient.delete(`${API_ENDPOINTS.workouts}/${id}`)

// Goal endpoints
export const getGoalsByUserId = (userId: string) =>
  apiClient.get(`${API_ENDPOINTS.goals}/user/${userId}`)
export const getGoalById = (id: string) => apiClient.get(`${API_ENDPOINTS.goals}/${id}`)
export const createGoal = (goalData: any) => apiClient.post(API_ENDPOINTS.goals, goalData)
export const updateGoal = (id: string, goalData: any) =>
  apiClient.put(`${API_ENDPOINTS.goals}/${id}`, goalData)
export const deleteGoal = (id: string) => apiClient.delete(`${API_ENDPOINTS.goals}/${id}`)

// Health check
export const healthCheck = () => apiClient.get(API_ENDPOINTS.health)
export const getApiInfo = () => apiClient.get(API_ENDPOINTS.info)

export default apiClient
