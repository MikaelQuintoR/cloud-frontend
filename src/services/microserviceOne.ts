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

export const fetchExamenPorPaciente = async (pacienteId: string) => {
  try {
    const response = await apiOne.get(`/${pacienteId}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener exámenes:', error);
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
