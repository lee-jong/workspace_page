import React from 'react';
import Head from 'next/head';
import Cookies from 'js-cookie';

import '../../styles/nav.css';
import '../../styles/mail.css';

import { validToken } from '../../actions/login';
import { getUserInfo } from '../../actions/user';

class Meta extends React.Component {
  validTokenCheck = async () => {
    let data = {
      token: Cookies.getJSON('auth')
    };
    try {
      let res = await validToken(data);
      if (res.status == 200) {
        this.getUser(data);
      }
      if (res.status !== 200) {
        Cookies.remove('auth');
      }
    } catch (err) {
      if (err.code == 401) {
        Cookies.remove('auth');
      }
    }
  };

  getUser = async data => {
    try {
      let res = await getUserInfo(data);
      if (res.status == 200) {
        Cookies.set('userInfo', res.result);
      }
    } catch (err) {
      console.log('err::', err);
    }
  };

  render() {
    this.validTokenCheck();

    return (
      <>
        <Head>
          <title>Bolierplate</title>
        </Head>
      </>
    );
  }
}

export default Meta;
