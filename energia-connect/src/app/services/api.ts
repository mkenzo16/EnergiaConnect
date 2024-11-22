import axios from 'axios';

// Configuração base para a API
const api = axios.create({
  baseURL: 'http://localhost:9090/api', // Substitua pelo endereço da sua API
});

export default api;
