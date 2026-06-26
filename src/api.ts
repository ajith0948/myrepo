import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'https://financial-backend-8me4.onrender.com';

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

export default api;
