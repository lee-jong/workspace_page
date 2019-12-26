// # Library
import React from 'react';

// # Component
import Header from '../components/page/home/header';
import Body from '../components/page/home/body/index';
import Footer from '../components/page/home/footer';

class Home extends React.Component {
  render() {
    return (
      <>
        <div className="main">
          <Header />
          <Body />
          <Footer />
        </div>
      </>
    );
  }
}

export default Home;
