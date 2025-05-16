
/**
 * Global application configuration
 */

const config = {
  api: {
    baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000',
  },
  app: {
    name: 'CardioPredict AI',
    description: 'AI-powered cardiac arrest risk prediction',
  },
};

export default config;
