import React from 'react';

class Write extends React.Component {
  render() {
    return (
      <>
        <div className="mail_list">
          <div className="mail_write_info">
            <div className="mail_write_writer">
              <div>보내는사람</div>
              <div>me {`<www@naver.com>`} </div>
            </div>
            <div className="mail_write_receive">
              <div>받는사람</div>
              <input type="text" />
            </div>
            <div className="mail_write_reference">
              <div>참조</div>
              <input type="text" />
            </div>
            <div className="mail_write_title">
              <div>제목</div>
              <input type="text" />
            </div>
            <div className="mail_write_attachment">
              <div>첨부</div>
              <div>
                <button>파일 첨부하기</button>
                <div>파일을 첨부할 수 있는 공간</div>
              </div>
            </div>
          </div>
          <div className="mail_write_bottom">
            <div className="mail_write_editor"></div>
            <textarea />
          </div>
        </div>
      </>
    );
  }
}

export default Write;
