import api from '../api';

export const listarPersonagens = async () => {
  const result = await api.get();
  return result;
};