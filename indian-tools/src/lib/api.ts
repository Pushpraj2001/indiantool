import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add auth token to requests if available
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const getTools = () => api.get('/tools');
export const getTool = (id: string) => api.get(`/tools/${id}`);
export const login = (credentials: { email: string; password: string }) => 
  api.post('/auth/login', credentials);