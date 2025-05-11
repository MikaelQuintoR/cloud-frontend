// src/services/api.ts
import axios from 'axios';

const API_URL_ONE = 'http://<IP_DEL_BACKEND>:8080/api/examenes'; //api examenes  
const API_URL_TWO = 'http://<IP_PUBLICA_2>:<PUERTO_2>/api/personas'; //personas

export const apiOne = axios.create({
  baseURL: API_URL_ONE,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiTwo = axios.create({
  baseURL: API_URL_TWO,
  headers: {
    'Content-Type': 'application/json',
  },
});
