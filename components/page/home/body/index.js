// # Library
import React from 'react';

// # Component
import Announcement from './Announcement';
import SideBar from './SideBar';
import Slide from './Slide';

class Body extends React.Component {
  render() {
    return (
      <>
        <div className="body">
          <div className="body_header">
            <div className="slide">
              <Slide />
            </div>
            <div className="body_right">
              <SideBar />
            </div>
          </div>
          <div className="body_bottom">
            <div className="announcement">
              <Announcement />
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default Body;
