import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fileapp-backend.herokuapp.com'
});

export default api;