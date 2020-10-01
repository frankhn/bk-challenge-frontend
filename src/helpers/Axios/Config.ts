import axios from 'axios';


const http = axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    Authorization: 'JWT ' + localStorage.auth_token,
    'access-control-allow-origin': '*',
    'content-Type': 'application/json',
  },
});

http.interceptors.request.use((request) => {
  request.headers['Authorization'] = 'JWT ' + localStorage.auth_token;
  return request;
});

export default http;
