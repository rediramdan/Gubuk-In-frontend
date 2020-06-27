import axios from 'axios';
import qs from 'qs';

const BASE_URL = 'http://3.92.162.78:8080';

export const getAllBooks = () => {
  return axios.get(`${BASE_URL}/books`);
};

export const postLogin = body => {
  return axios.post(`${BASE_URL}/auth/login`, qs.stringify(body));
};

export const postRegister = body => {
  return axios.post(`${BASE_URL}/auth/register`, qs.stringify(body));
};

export const postVerify = body => {
  return axios.post(`${BASE_URL}/auth/verify`, qs.stringify(body));
};

