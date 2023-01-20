import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://172.23.93.113:3333',
});
