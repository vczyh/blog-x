import axios from 'axios';

const http = axios.create({
  // baseURL: 'http://localhost:8080/api',
  baseURL: '/api',
});

http.interceptors.request.use((config) => {
  // eslint-disable-next-line no-param-reassign
  config.headers.token = 'token';
  return config;
});

http.interceptors.response.use((response) => {
  const res = response.data;
  if (res.code === 1) {
    return res;
  }
  return res;
});

export default http;
