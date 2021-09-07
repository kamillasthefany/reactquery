import React from 'react';
import { MainContainer } from './styles';
import { Card } from '../../components/Card/index';
import { useListarPersonagens } from '../../queries/rickandmorty/index';

export const Home = () => {
  const rick = useListarPersonagens();

  return (
    <MainContainer id='teste'>
      {rick.isLoading && (<p>carregando</p>)}
      {
        rick.data && (
          rick.data.map(item => (<Card title={item.name} subtitle={item.species} image={item.image} />))
        )
      }
    </MainContainer >
  );
};