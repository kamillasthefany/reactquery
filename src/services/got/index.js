import api from "../api";
export const listarPersonagens = async () => {
  const result = await api.get();
  return result;
};
export const obterPersonagem = async (nome) => {
  const result = await api.get(`?name=${nome}`);
  return result;
};