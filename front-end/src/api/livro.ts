import api from '../api/api';

export const getAllLivros = () => {
  return api.get('/livros');
};

// // Função para obter um usuário por ID
// export const getUserById = (id) => {
//   return api.get(`/users/${id}`);
// };

// // Função para criar um novo usuário
// export const createUser = (userData) => {
//   return api.post('/users', userData);
// };

// // Função para atualizar um usuário existente
// export const updateUser = (id, userData) => {
//   return api.put(`/users/${id}`, userData);
// };

// // Função para deletar um usuário
// export const deleteUser = (id) => {
//   return api.delete(`/users/${id}`);
// };
