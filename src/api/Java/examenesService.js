import axiosInstanceHistorial from './axiosInstanceHistorial';

export const buscarExamenes = (params) => {
  return axiosInstanceHistorial.get('/buscar', { params });
};

export const getExamenesPorPaciente = (pacienteId) => {
  return axiosInstanceHistorial.get(`/${pacienteId}`);
};

export const createExamen = (examenData) => {
  return axiosInstanceHistorial.post('', examenData);
};
