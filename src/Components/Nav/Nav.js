import React, { Component } from 'react';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <>
        <nav className="nav">
          <div className="navRight">
            <img
              className="mainLogo"
              src="/images/Doyun/instagram.png"
              alt="instagramImage"
            />
            <h2>Westargram</h2>
          </div>
          <input className="navSearch" type="text" placeholder="search"></input>
          <div className="navLeft">
            <img
              className="profileImg"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="search"
            />
            <img
              className="profileImg"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              alt="heart"
            />
            <img
              className="profileImg"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              alt="myPage"
            />
          </div>
        </nav>
      </>
    );
  }
}

export default Nav;
