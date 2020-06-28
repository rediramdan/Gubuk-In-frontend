import axios from 'axios';
import qs from 'qs';

const BASE_URL = 'http://3.92.162.78:8080';

export const getPremiumBooks = () => {
  return axios.get(`${BASE_URL}/books?price=premium&status=accepted`);
};

export const searchPremiumBooks = (val) => {
  return axios.get(`${BASE_URL}/books?price=premium&status=accepted&search=${val}`);
};

export const getFreeBooks = () => {
  return axios.get(`${BASE_URL}/books?price=free&status=accepted`);
};

export const searchFreeBooks = (val) => {
  return axios.get(`${BASE_URL}/books?price=free&status=accepted&search=${val}`);
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

