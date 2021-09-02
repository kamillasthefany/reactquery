import { useQuery } from "react-query";
import { listarPersonagens, obterPersonagem } from "../../services/got/index";
export const useListarPersonagens = () => {
  const { isLoading, data, isError } = useQuery("personagens", () =>
    listarPersonagens()
  );
  return {
    isLoadingGoT: isLoading,
    dataGoT: data,
    errorGoT: isError
  };
};
export const usePesquisarPersonagem = (nome) => {
  const { data, isLoading, isSuccess, isError } = useQuery(nome, () =>
    obterPersonagem(nome)
  );
  return {
    isLoadingGoT: isLoading,
    dataGoT: data,
    errorGoT: isError,
    isSuccessGot: isSuccess
  };
};