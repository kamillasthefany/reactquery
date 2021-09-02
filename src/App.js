import logo from './logo.svg';
import './App.css';
import { useQuery } from 'react-query';
import axios from 'axios';
// import {
//   useListarPersonagens,
//   usePesquisarPersonagem
// } from "./queries/got/index";

function App() {

  //const GoT = useListarPersonagens();

  const { isLoading, data } = useQuery('teste', () =>
    axios("https://thesimpsonsquoteapi.glitch.me/quotes")
  );

  return (
    <div className="App">
      {isLoading && (<p>carregando</p>)}
      {
        data && (
          <div>
            <p>{data.data[0].quote}</p>
            <img src={data.data[0].image} alt="imagem do personagem" />
          </div>
        )
      }
    </div>
  );
}

export default App;
