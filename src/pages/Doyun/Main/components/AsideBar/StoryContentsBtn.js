import React, { Component } from 'react';
import './StoryContentsBtn.scss';

export class StoryContents extends Component {
  render() {
    return (
      <>
        <div className="storyContentsBtn">
          <img className="profile" src={this.props.profile} alt="profile" />
          <div className="contentsContainer">
            <p className="name">Billie</p>
            <p className="timeGap">1.4M followed</p>
          </div>
          <button>Follow</button>
        </div>
      </>
    );
  }
}

export default StoryContents;
