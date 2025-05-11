import axiosInstancePy from './axiosInstancePy';

export const getRecetas = () => axiosInstancePy.get('/recetas');
export const getRecetaById = (id) => axiosInstancePy.get(`/recetas/${id}`);
export const createReceta = (data) => axiosInstancePy.post('/recetas', data);
export const updateReceta = (id, data) => axiosInstancePy.put(`/recetas/${id}`, data);
export const deleteReceta = (id) => axiosInstancePy.delete(`/recetas/${id}`);
