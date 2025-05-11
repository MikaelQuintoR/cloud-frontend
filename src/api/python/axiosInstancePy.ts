import axios from 'axios';

const axiosInstancePy = axios.create({
  baseURL: 'http://localhost:3000/api', // Cambia esto
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstancePy;