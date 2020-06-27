import axios from 'axios';
import qs from 'qs';

const BASE_URL = 'http://3.92.162.78:8080';

export const getAllBooks = () => {
  return axios.get(`${BASE_URL}/books`);
};

