import Router from 'next/router';

export const handlePage = name => {
  Router.push('/' + name);
};
