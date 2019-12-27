import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 3 * 1000
});

export const handleError = err => {
  let error = {};

  if (err && err.response && err.response.data) {
    error = err.response.data;
  } else {
    error = err;
  }

  return Promise.reject(error);
};

export const handleSuccess = res => res.data;

// ----------------- POST ACTIONS -----------------
export const getPosts = async () => {
  return axiosInstance
    .get('/posts')
    .then(handleSuccess)
    .catch(handleError);
};

export const getPostById = async id => {
  return axiosInstance
    .get(`/posts/${id}`)
    .then(handleSuccess)
    .catch(handleError);
};
