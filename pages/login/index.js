import React from 'react';
import Cookies from 'js-cookie';
import Router from 'next/router';

import { getToken } from '../../actions/login';

class Login extends React.Component {
  state = {
    login: {
      id: '',
      password: ''
    }
  };

  handleChange = e => {
    this.setState({
      login: {
        ...this.state.login,
        [e.target.name]: e.target.value
      }
    });
  };

  handleLogin = async () => {
    const { id, password } = this.state.login;

    try {
      let data = {
        id,
        password
      };
      let res = await getToken(data);
      if (res.status == 200) {
        Cookies.set('auth', res.token);
        Router.push('/');
      }
      if (res.status !== 200) {
        console.log('err', res);
      }
    } catch (err) {
      console.log('err', err);
    }
  };

  render() {
    return (
      <>
        <div className="main">
          <div className="login_page">
            <div className="login_content">
              <div className="login_logo">
                <img src="/static/images/logo.png" />
              </div>
              <div className="login_popup">
                <div className="login_id">
                  <input
                    type="text"
                    name="id"
                    onChange={this.handleChange}
                    placeholder="아이디 입력"
                  />
                </div>
                <div className="login_pw">
                  <input
                    type="password"
                    name="password"
                    onChange={this.handleChange}
                    placeholder="비밀번호 입력"
                  />
                </div>
                <div className="login_page_button">
                  <button onClick={this.handleLogin}>로그인</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
