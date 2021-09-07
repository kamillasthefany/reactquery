import axios from 'axios';

//game of thrones
// const api = axios.create({
//   baseURL: 'https://www.anapioficeandfire.com/api/characters'
// });

const api = axios.create({
  baseURL: 'https://rickandmortyapi.com/api/character'
});

export default api;