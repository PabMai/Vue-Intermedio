import axios from 'axios';

const rickandmorty = axios.create({
	baseURL: 'https://rickandmortyapi.com/api'
});

export default rickandmorty;
