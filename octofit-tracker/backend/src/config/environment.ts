export const getApiBaseUrl = (): string => {
  if (typeof process !== 'undefined' && process.env.CODESPACE_NAME) {
    return `https://${process.env.CODESPACE_NAME}-8000.app.github.dev`
  }
  return 'http://localhost:8000'
}

export const getServerPort = (): number => {
  return parseInt(process.env.PORT || '8000', 10)
}

export const isCodespace = (): boolean => {
  return !!process.env.CODESPACE_NAME
}

export const getEnvironmentInfo = () => {
  return {
    environment: isCodespace() ? 'Codespace' : 'localhost',
    apiBaseUrl: getApiBaseUrl(),
    port: getServerPort(),
    codespaceName: process.env.CODESPACE_NAME || 'N/A',
  }
}
