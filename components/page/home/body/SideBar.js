import React from 'react';
import Cookies from 'js-cookie';

import { logout } from '../../../../helpers/auth';
import { handlePage } from '../../../../helpers/nextUtil';

class SideBar extends React.Component {
  render() {
    return (
      <>
        <div className="login_after">
          <div className="login_after_info">
            <div>
              {Cookies.getJSON('userInfo') && Cookies.getJSON('userInfo').id} 님
            </div>
            <div>
              <div onClick={() => handlePage('mail')}>메일(0)</div>
              <div onClick={logout}>로그아웃</div>
            </div>
          </div>
        </div>

        <div className="document">
          <div>무언가 하는 곳 ㅎ</div>
          <div>차차 생각하자</div>
        </div>
      </>
    );
  }
}

export default SideBar;
