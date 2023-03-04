import axios from 'axios';

const jikanApi = axios.create({
  baseURL: 'https://api.jikan.moe/v4/anime/20'
});

export default jikanApi;
