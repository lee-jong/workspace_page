import React from 'react';

class SideMenu extends React.Component {
  render() {
    const { handleSideMenu } = this.props;
    return (
      <>
        <div className="mail_sideMenu">
          <div className="mail_create_buttons">
            <div onClick={() => handleSideMenu('write')}>메일쓰기</div>
            <div>내게쓰기</div>
          </div>
          <div className="mail_sideMenu_content">
            <div>
              <div className="mail_sideMenu_notification">
                <span onClick={() => handleSideMenu('list')}>전체</span>
                <span>|</span>
                <span>안읽음</span>
              </div>
              <div className="mail_sideMenu_buttons">
                <div onClick={() => handleSideMenu('list')}>받은메일함</div>
                <div>내게쓴메일함</div>
                <div>보낸메일함</div>
                <div>임시보관함</div>
                <div>휴지통</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default SideMenu;
