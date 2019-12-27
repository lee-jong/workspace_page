import React from 'react';

class Body extends React.Component {
  render() {
    return (
      <>
        <div className="mail_list">
          <div className="mail_list_content">
            <table>
              <colgroup>
                <col width="3%" />
                <col width="3%" />
                <col width="7%" />
                <col width="20%" />
                <col width="auto" />
                <col width="12%" />
              </colgroup>
              <tbody>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div>편지</div>
                  </td>
                  <td>보낸사람</td>
                  <td>내용</td>
                  <td>날짜</td>
                </tr>
                <tr>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <input type="checkbox" />
                  </td>
                  <td>
                    <div>편지</div>
                  </td>
                  <td>보낸사람</td>
                  <td>내용</td>
                  <td>날짜</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}

export default Body;
