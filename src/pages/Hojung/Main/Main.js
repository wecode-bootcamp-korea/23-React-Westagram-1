import React from 'react';
import './Main.scss';
import MainFeed from './MainFeed';
import SideMenu from './SideMenu';

class MainHojung extends React.Component {
  render() {
    const userId = this.props.location.state.id;
    return (
      <>
        <div id="main">
          <div className="contain">
            <MainFeed userId={userId} />
            <SideMenu />
          </div>
        </div>
      </>
    );
  }
}

export default MainHojung;
