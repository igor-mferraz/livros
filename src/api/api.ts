import axios from 'axios';
// https://api-livro-nestjs-production.up.railway.app
const api = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 10000, 
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;
