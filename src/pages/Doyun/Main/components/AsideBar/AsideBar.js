import React, { Component } from 'react';
import StoryContents from './StoryContents';
import StoryContentsBtn from './StoryContentsBtn';
import Profile from '../Profile';

import './AsideBar.scss';

export class AsideBar extends Component {
  render() {
    return (
      <>
        <div className="mainRight">
          <Profile profile="/images/Doyun/profile.png" />
          <div className="mainRightStory">
            <div className="storyHeader">
              <p>story</p>
              <p className="showAll">show all</p>
            </div>
            <div className="storyContainer">
              <StoryContents profile="/images/Doyun/profile.png" />
            </div>
          </div>
          <div className="mainRightStory">
            <div className="storyHeader">
              <p>Recommend</p>
              <p className="showAll">show all</p>
            </div>
            <div className="storyContainer">
              <StoryContentsBtn profile="/images/Doyun/profile.png" />
            </div>
          </div>
          <div className="mainRightFooter">
            <p>© 2021 westargram by Doyun</p>
          </div>
        </div>
      </>
    );
  }
}

export default AsideBar;
