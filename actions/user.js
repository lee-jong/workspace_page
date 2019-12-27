import { axiosInstance, handleSuccess, handleError } from './index';

export const getUserInfo = async req => {
  let data = {
    token: req.token
  };

  return axiosInstance
    .post('/getUserInfo', data)
    .then(handleSuccess)
    .catch(handleError);
};
