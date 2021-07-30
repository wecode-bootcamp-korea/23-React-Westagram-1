import React, { Component } from 'react';
import Feed from './components/Feed/Feed';
import AsideBar from './components/AsideBar/AsideBar';
import './Contents.scss';

export class Contents extends Component {
  render() {
    return (
      <main>
        <Feed />
        <AsideBar />
      </main>
    );
  }
}

export default Contents;
