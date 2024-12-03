import axios from 'axios';

// utils/axiosInstance.js or axiosInstance.ts
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});
console.log("API Base URL:", process.env.REACT_APP_API_URL);


// Attach the token from localStorage to every request if present
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
