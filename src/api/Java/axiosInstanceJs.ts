import axios from 'axios';

const axiosInstanceHistorial = axios.create({
  baseURL: 'http://localhost:3001/api/examenes',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstanceHistorial;