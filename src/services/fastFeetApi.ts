import axios from 'axios';

export const fastFeetApi = axios.create({
  baseURL: 'http://10.0.0.2:3333',
});
