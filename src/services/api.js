import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.anapioficeandfire.com/api/characters'
});
export default api;