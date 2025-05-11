import { apiOne, apiTwo } from './api';

//Microservicio Persona

export const obtenerPacientePorId = async (id: number) => {
  try {
    const response = await apiTwo.get(`/paciente/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener paciente', error);
    throw error;
  }
};

export const obtenerMedicoPorId = async (id: number) => {
  try {
    const response = await apiTwo.get(`/medico/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener médico', error);
    throw error;
  }
};

export const crearPaciente = async (pacienteData: any) => {
  try {
    const response = await apiTwo.post('/paciente', pacienteData);
    return response.data;
  } catch (error) {
    console.error('Error al crear paciente', error);
    throw error;
  }
};

export const crearMedico = async (medicoData: any) => {
  try {
    const response = await apiTwo.post('/medico', medicoData);
    return response.data;
  } catch (error) {
    console.error('Error al crear médico', error);
    throw error;
  }
};

export const actualizarPaciente = async (id: number, pacienteData: any) => {
  try {
    const response = await apiTwo.put(`/paciente/${id}`, pacienteData);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar paciente', error);
    throw error;
  }
};

export const actualizarMedico = async (id: number, medicoData: any) => {
  try {
    const response = await apiTwo.put(`/medico/${id}`, medicoData);
    return response.data;
  } catch (error) {
    console.error('Error al actualizar médico', error);
    throw error;
  }
};

export const eliminarPaciente = async (id: number) => {
  try {
    const response = await apiTwo.delete(`/paciente/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar paciente', error);
    throw error;
  }
}

export const eliminarMedico = async (id: number) => {
  try {
    const response = await apiTwo.delete(`/medico/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error al eliminar médico', error);
    throw error;
  }
};

export const obtenerPacientePorDni = async (dni: string) => {
  try {
    const response = await apiTwo.get(`/paciente/dni/${dni}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener paciente por DNI', error);
    throw error;
  }
};

export const obtenerMedicoPorDni = async (dni: string) => {
  try {
    const response = await apiTwo.get(`/medico/dni/${dni}`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener médico por DNI', error);
    throw error;
  }
};

export const buscarMedicosPorEspecialidadYDia = async (especialidad: string, dia: string) => {
  try {
    const response = await apiTwo.get(`/medicos?especialidad=${especialidad}&dia=${dia}`);
    return response.data;
  } catch (error) {
    console.error('Error al buscar médicos', error);
    throw error;
  }
};
