// # Labrary
import React from 'react';

// # Utill
import { authChecked } from '../../helpers/auth';

// # Component
import SideMenu from '../../components/page/mail/sideMenu';
import List from '../../components/page/mail/body/index';
import Header from '../../components/page/mail/header';
import Write from '../../components/page/mail/body/write';

class Mail extends React.Component {
  state = {
    page: 'write'
  };

  componentDidMount() {
    authChecked();
  }

  handleSideMenu = name => {
    this.setState({
      page: name
    });
  };

  render() {
    const { page } = this.state;
    return (
      <>
        <div className="main">
          <Header />
          <div className="mail_body">
            <SideMenu handleSideMenu={this.handleSideMenu} />
            {page == 'list' && <List />}
            {page == 'write' && <Write />}
          </div>
        </div>
      </>
    );
  }
}

export default Mail;
