import axios from 'axios';
// https://api-livro-nestjs-production.up.railway.app
const api = axios.create({
  baseURL: 'https://api-livro-nestjs-production.up.railway.app',
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;



