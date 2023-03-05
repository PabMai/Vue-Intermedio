import axios from 'axios';

const jikanApi = axios.create({
  baseURL: 'https://rickandmortyapi.com/api'
});

export default jikanApi;
