import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://172.23.91.202:3333',
});
