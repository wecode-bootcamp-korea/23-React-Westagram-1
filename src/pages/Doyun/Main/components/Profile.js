import React, { Component } from 'react';
import './Profile.scss';

export class Profile extends Component {
  render() {
    return (
      <>
        <div className="mainRightHead">
          <img className="profile" src={this.props.profile} alt="profile" />
          <div className="nickNameContainer">
            <p className="name">Doyun</p>
            <p className="nickName">I'm a fontend-Dev!</p>
          </div>
        </div>
      </>
    );
  }
}

export default Profile;
