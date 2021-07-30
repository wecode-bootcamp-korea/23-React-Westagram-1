/*eslint-disable*/

import React from 'react';
import { withRouter } from 'react-router-dom';
import Comment from '../../../Components/Main/Comment.js';
import RightFeed from '../../../Components/Main/RightFeed.js';
import './Main.scss';

class MainJungwoo extends React.Component {
  constructor() {
    super();
    this.state = {
      MyProfile: [
        {
          MyId: 'todayhouse',
          MyName: '박정우',
        },
      ],
    };
  }
  render() {
    return (
      <>
        <main className="mainContainer">
          <article className="feedsArticle">
            <div className="articleHeader">
              <img src="../../images/Jungwoo/caleb-ekeroth.jpg" />
              <p className="navId">{this.state.MyProfile[0].MyId}</p>
              <img className="dot" src="../../images/Jungwoo/more.png" />
            </div>
            <div className="articlePic">
              <img src="https://source.unsplash.com/user/erondu/1600x900" />
            </div>
            <Comment MyProfile={this.state.MyProfile} />
          </article>
          <RightFeed MyProfile={this.state.MyProfile} />
        </main>
      </>
    );
  }
}

export default MainJungwoo;
