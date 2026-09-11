/**
 * API Configuration for Codespaces and localhost environments
 * Backend runs on port 8000
 */

interface ApiConfig {
  baseUrl: string;
  port: number;
}

/**
 * Get the API base URL based on the environment
 * - Codespaces: https://$CODESPACE_NAME-8000.app.github.dev
 * - Localhost: http://localhost:8000
 */
function getApiBaseUrl(): string {
  const codespaceName = process.env.CODESPACE_NAME;
  
  if (codespaceName) {
    // Running in GitHub Codespaces
    return `https://${codespaceName}-8000.app.github.dev`;
  }
  
  // Running locally
  return 'http://localhost:8000';
}

const apiConfig: ApiConfig = {
  baseUrl: getApiBaseUrl(),
  port: parseInt(process.env.PORT || '8000', 10),
};

export default apiConfig;
