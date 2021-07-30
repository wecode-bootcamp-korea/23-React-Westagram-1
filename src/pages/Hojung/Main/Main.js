import React from 'react';
import './Main.scss';
import MainFeed from './MainFeed';
import SideMenu from './SideMenu';

class MainHojung extends React.Component {
  logout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/login-hojung');
  };
  render() {
    const username = this.props.history.location.state.username;
    return (
      <div id="main">
        <div className="contain">
          <div onClick={this.logout}>로그아웃</div>
          <MainFeed username={username} />
          <SideMenu />
        </div>
      </div>
    );
  }
}

export default MainHojung;
