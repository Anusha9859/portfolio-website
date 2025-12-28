import axios from 'axios';

// ⚠️ TODO: Replace with YOUR actual Render backend URL!
// Go to dashboard.render.com → Your backend service → Copy the URL
// Example: 'https://portfolio-backend-abc1.onrender.com/api'
const PRODUCTION_API = 'https://portfolio-backend-fjcm.onrender.com/api';
const DEVELOPMENT_API = 'http://localhost:5000/api';

// Automatically use correct API based on environment
const API_URL = import.meta.env.VITE_API_URL || 
                (import.meta.env.PROD ? PRODUCTION_API : DEVELOPMENT_API);

console.log('🔗 API URL:', API_URL);
console.log('📍 Environment:', import.meta.env.MODE);

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true
});

// Request interceptor - Log all outgoing requests
api.interceptors.request.use(
  config => {
    console.log('📤 API Request:', {
      method: config.method.toUpperCase(),
      url: config.url,
      fullURL: `${config.baseURL}${config.url}`
    });
    return config;
  },
  error => {
    console.error('❌ Request setup error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor - Log all responses
api.interceptors.response.use(
  response => {
    console.log('✅ API Response:', {
      status: response.status,
      data: response.data
    });
    return response;
  },
  error => {
    console.error('❌ API Error:', {
      status: error.response?.status,
      statusText: error.response?.statusText,
      message: error.response?.data?.message || error.message,
      url: error.config?.url
    });
    return Promise.reject(error);
  }
);

// Contact API
export const submitContact = async (formData) => {
  try {
    console.log('📧 Submitting contact form:', formData);
    const response = await api.post('/contact/submit', formData);
    return response.data;
  } catch (error) {
    console.error('Contact form submission failed:', error);
    throw error.response?.data || { message: 'Failed to send message. Please try again.' };
  }
};

// Chatbot API
export const sendChatMessage = async (message, sessionId) => {
  try {
    const response = await api.post('/chatbot/chat', { message, sessionId });
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to get response' };
  }
};

export default api;