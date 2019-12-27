import { axiosInstance, handleSuccess, handleError } from './index';

export const getToken = async req => {
  let data = {
    id: req.id,
    password: req.password
  };

  return axiosInstance
    .post('/getToken', data)
    .then(handleSuccess)
    .catch(handleError);
};

export const validToken = async req => {
  let data = {
    token: req.token
  };
  return axiosInstance
    .post('/vaildToken', data)
    .then(handleSuccess)
    .catch(handleError);
};
