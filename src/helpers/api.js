import axios from 'axios';
import Cookie from 'js-cookie';
import Config from '../constants/configs';
import { ACCESS_TOKEN } from '../constants/cookies';

const api = axios.create({
  baseURL: Config.baseAPI,
  timeout: 1000
});

api.interceptors.request.use(
  config => {
    if (config.baseURL === Config.baseAPI && !config.headers.Authorization) {
      const token = Cookie.get(ACCESS_TOKEN);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  error => Promise.reject(error)
);

api.interceptors.response.use(
  response => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  },
  error => Promise.reject(error)
);

export default api;
