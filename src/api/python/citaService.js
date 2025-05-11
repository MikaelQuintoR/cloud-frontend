import axiosInstancePy from './axiosInstancePy';

export const getCitas = () => axiosInstancePy.get('/citas');
export const getCitaById = (id) => axiosInstancePy.get(`/citas/${id}`);
export const createCita = (data) => axiosInstancePy.post('/citas', data);
export const updateCita = (id, data) => axiosInstancePy.put(`/citas/${id}`, data);
export const deleteCita = (id) => axiosInstancePy.delete(`/citas/${id}`);
