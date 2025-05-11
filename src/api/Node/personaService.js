import axiosInstancePersona from './axiosInstancePersona';

export const getHello = () => {
  return axiosInstancePersona.get('/');
};
