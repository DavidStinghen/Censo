import axios from 'axios';

const api = axios.create({
  baseURL: 'https://whispering-headland-07022.herokuapp.com',
});

export default api;
