import React from 'react';
import Nav from '../../../Components/Nav/Nav';
import Feeds from './Feed/Feeds';
import MainAside from './MainAside/MainAside';
import './Main.scss';

export class MainJungmin extends React.Component {
  render() {
    return (
      <div className="All">
        <div className="mainContainer">
          <div>
            <Feeds userInfo={this.props.history.location.state} />
          </div>
          <MainAside userInfo={this.props.history.location.state} />
        </div>
      </div>
    );
  }
}

export default MainJungmin;
