const getApiBaseUrl = (): string => {
  // For Codespaces
  if (typeof window !== 'undefined' && window.location.hostname.includes('app.github.dev')) {
    const parts = window.location.hostname.split('.')
    const codespaceName = parts[0]
    return `https://${codespaceName}-8000.app.github.dev`
  }

  // For localhost development
  return 'http://localhost:8000'
}

export const API_BASE_URL = getApiBaseUrl()

export const API_ENDPOINTS = {
  root: `${API_BASE_URL}/`,
  health: `${API_BASE_URL}/health`,
  info: `${API_BASE_URL}/info`,
  users: `${API_BASE_URL}/api/users`,
  workouts: `${API_BASE_URL}/api/workouts`,
  goals: `${API_BASE_URL}/api/goals`,
}
