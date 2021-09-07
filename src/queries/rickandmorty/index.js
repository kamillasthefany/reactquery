import { useQuery } from "react-query";
import { listarPersonagens } from "../../services/rickandmorty/index";

export const useListarPersonagens = () => {
  const { isLoading, data, isError } = useQuery("personagens", () =>
    listarPersonagens()
  );
  return {
    isLoading: isLoading,
    data: data?.data?.results,
    error: isError
  };
};

// export const usePesquisarPersonagem = (nome) => {
//   const { data, isLoading, isSuccess, isError } = useQuery(nome, () =>
//     obterPersonagem(nome)
//   );
//   return {
//     isLoadingGoT: isLoading,
//     dataGoT: data,
//     errorGoT: isError,
//     isSuccessGot: isSuccess
//   };
// };