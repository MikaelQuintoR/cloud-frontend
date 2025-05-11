import { apiOne } from './api';

//microservicio examenes

export const buscarExamenes = async (pacienteId: string, citaId: string, medicoId: string) => {
  try {
    const response = await apiOne.get('/buscar', {
      params: {
        pacienteId,
        citaId,
        medicoId,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error al buscar exámenes:', error);
    throw error;
  }
};

export const obtenerHistorialCitas = async (pacienteId: string) => {
  try {
    const response = await apiOne.get(`/examenes/${pacienteId}`);
    return response.data; // Devuelve el historial de citas
  } catch (error) {
    console.error('Error al obtener historial de citas', error);
    throw error;
  }
};

export const crearExamen = async (examenMedico: any) => {
  try {
    const response = await apiOne.post('/', examenMedico);
    return response.data;
  } catch (error) {
    console.error('Error al crear examen:', error);
    throw error;
  }
};
