import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Contact API
export const submitContact = async (formData) => {
  try {
    const response = await api.post('/contact/submit', formData);
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Failed to send message' };
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