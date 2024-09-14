import api from '../api/api';
import { Livro } from '../types/livro';

export const getAllLivros = () => {
  return api.get('/livros');
};

export const getLivrosById = (id:number) => {
    return api.get(`/livros/${id}`);
};


export const createLivro = (data:Livro) => {
  return api.post(`/livros`, data);
};


export const updateLivro = (id:number, userData:Livro) => {
  return api.patch(`/livros/${id}`, userData);
};


export const deleteLivro = (id:number) => {
  return api.delete(`/livros/${id}`);
};
