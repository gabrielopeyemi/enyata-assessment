import axios from 'axios';

const api = axios.create({
  baseURL: 'https://swapi.dev/api',
//   headers: {},
});

export const fetcher = (url) => api.get(url).then(res => res.data);