import axios from 'axios';

const api = axios.create({
  baseURL: "https://my-json-server.typicode.com/Leandro-Goncalves/redux-store",
})

export default api;