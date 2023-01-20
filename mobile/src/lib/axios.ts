import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://172.23.90.134:3333',
});
