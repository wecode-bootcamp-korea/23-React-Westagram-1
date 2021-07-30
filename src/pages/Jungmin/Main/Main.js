import React from 'react';
import Nav from '../../../Components/Nav/Nav';
import Feeds from './Feeds/Feeds';
import MainAside from './MainAside/MainAside';
import './Main.scss';

export class MainJungmin extends React.Component {
  render() {
    const { username } = this.props.history.location.state;
    return (
      <div className="All">
        <div className="mainContainer">
          <div>
            <Feeds userInfo={username} />
          </div>
          <MainAside userInfo={username} />
        </div>
      </div>
    );
  }
}

export default MainJungmin;
