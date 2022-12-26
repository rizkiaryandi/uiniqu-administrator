import axios from 'axios';

const BASE_URL = 'https://api.uiniqu.cloud/api/v1';

export const get = (url, header) => {
  return axios.get(`${BASE_URL}/${url}`, header);
};

export const post = (url, data, header) => {
  return axios.post(`${BASE_URL}/${url}`, data, header);
};

export const put = (url, data, header) => {
  return axios.put(`${BASE_URL}/${url}`, data, header);
};

export const del = (url, data, header) => {
  return axios.put(`${BASE_URL}/${url}`, data, header);
};

export const setUser = item => {
  localStorage.setItem('userinfo', item);
};

export const getUser = () => {
  return localStorage.getItem('userinfo');
};

export const dropUser = () => {
  localStorage.removeItem('userinfo');
};
