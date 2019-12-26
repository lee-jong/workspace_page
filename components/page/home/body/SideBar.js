import React from 'react';

import { handlePage } from '../../../../helpers/nextUtil';

const SideBar = ({}) => {
  return (
    <>
      <div className="login">
        <div className="login_button">
          <button onClick={() => handlePage('login')}>로그인</button>
        </div>
      </div>
      <div className="document">
        <div>무언가 하는 곳 ㅎ</div>
      </div>
    </>
  );
};

export default SideBar;
