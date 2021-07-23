import React from 'react';
import Nav from '../../../Components/Nav/Nav';
import Feed from './Feed/Feed';
import MainAside from './MainAside/MainAside';
import './Main.scss';

export class MainJungmin extends React.Component {
  render() {
    return (
      <div className="All">
        <div className="mainContainer">
          <Feed />
          <MainAside />
        </div>
      </div>
    );
  }
}

export default MainJungmin;
