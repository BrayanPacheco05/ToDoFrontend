import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5195/api/todo', // Cambia la URL al endpoint de tu API
});

export default api;