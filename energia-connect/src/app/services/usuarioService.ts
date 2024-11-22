import api from './api';

// Serviço para cadastro de usuário
export const cadastrarUsuario = async (usuario: {
  nome: string;
  email: string;
  cpf: string;
  senha: string;
}) => {
  try {
    const response = await api.post('/usuarios', usuario);
    return response.data;
  } catch (error) {
    console.error('Erro ao cadastrar usuário:', error);
    throw error;
  }
};

// Serviço para buscar usuário por e-mail
export const buscarUsuarioPorEmail = async (email: string) => {
  try {
    const response = await api.get(`/usuarios/${email}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar usuário:', error);
    throw error;
  }
};
