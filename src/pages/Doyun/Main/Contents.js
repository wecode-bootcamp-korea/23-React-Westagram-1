import React, { Component } from 'react';
import Feed from './components/Feed/Feed';
import Rightmenu from './components/Rightmenu/Rightmenu';
import './Contents.scss';

export class Contents extends Component {
  render() {
    return (
      <>
        <main>
          <Feed />
          <Rightmenu />
        </main>
      </>
    );
  }
}

export default Contents;
