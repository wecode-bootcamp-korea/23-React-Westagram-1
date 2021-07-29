import React from 'react';
import './Main.scss';
import MainFeed from './MainFeed';
import SideMenu from './SideMenu';

class MainHojung extends React.Component {
  logout = e => {
    localStorage.removeItem('token');
    this.props.history.push('/login-hojung');
  };
  render() {
    const userId = this.props.id;
    return (
      <>
        <div id="main">
          <div className="contain">
            <div onClick={this.logout}>로그아웃</div>
            <MainFeed userId={userId} />
            <SideMenu />
          </div>
        </div>
      </>
    );
  }
}

export default MainHojung;
