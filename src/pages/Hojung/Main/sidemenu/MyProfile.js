import React from 'react';

class MyProfile extends React.Component {
  render() {
    return (
      <a href="/" className="myProfile">
        <div className="myImg">
          <img alt="프로필 이미지" src="/images/Hojung/profile_img.jpeg" />
        </div>
        <div className="myInfo">
          <div className="myId">canon_mj</div>
          <div className="myDesc">WeCode | 위코드</div>
        </div>
      </a>
    );
  }
}

export default MyProfile;
