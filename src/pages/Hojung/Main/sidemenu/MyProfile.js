import React from 'react';
import { Link } from 'react-router-dom';

class MyProfile extends React.Component {
  render() {
    return (
      <Link className="myProfile">
        <div className="myImg">
          <img alt="프로필 이미지" src="/images/Hojung/profile_img.jpeg" />
        </div>
        <div className="myInfo">
          <div className="myId">canon_mj</div>
          <div className="myDesc">WeCode | 위코드</div>
        </div>
      </Link>
    );
  }
}

export default MyProfile;
