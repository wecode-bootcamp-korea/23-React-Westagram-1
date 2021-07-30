import React, { Component } from 'react';
import './StoryContents.scss';

export class StoryContents extends Component {
  render() {
    return (
      <>
        <div className="storyContents">
          <img className="profile" src={this.props.profile} alt="profile" />
          <div className="contentsContainer">
            <p className="name">Hyeon_min</p>
            <p className="timeGap">27 min ago</p>
          </div>
        </div>
      </>
    );
  }
}

export default StoryContents;
