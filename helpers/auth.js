import Cookies from 'js-cookie';
import Router from 'next/router';

export const logout = () => {
  Cookies.remove('auth');
  window.location.reload();
};

export const authChecked = () => {
  if (!Cookies.getJSON('auth')) {
    Router.push('/login');
  }
};
