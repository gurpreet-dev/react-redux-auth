import axios from 'axios';
import conf from '../conf';
import authService from './AuthService';

export const Client = axios.create({
    baseURL: conf.apiUrl
});

Client.interceptors.request.use(function (config) {
    config.headers['Authorization'] = authService.getToken()
    return config;
}, function (error) {
    // Do something with request error
    // return Promise.reject(error);
});