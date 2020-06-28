import axios from 'axios';
import qs from 'qs';

const BASE_URL = 'http://3.92.162.78:8080';



export const getPremiumBooks = () => {
  return axios.get(`${BASE_URL}/books?price=premium&status=accepted&search=pecinta`);
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

export const putUserImageProfile = body => {
  const {id_user, image_profile, token} = body;
  return axios.put(`${BASE_URL}/user/${id_user}`, qs.stringify(image_profile), {
    headers: {
      Authorization: `${token}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
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


export const postBooksAll = body => {
  return axios.post(`${BASE_URL}/books`, qs.stringify(body));
};

export const postForgot = body => {
  return axios.post(`${BASE_URL}/auth/forgot`, qs.stringify(body));
};
