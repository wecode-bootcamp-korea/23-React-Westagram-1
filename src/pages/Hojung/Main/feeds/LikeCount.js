import React from 'react';
import { Link } from 'react-router-dom';

class MainFeed extends React.Component {
  render() {
    return (
      <div className="likeCount">
        <div className="likeImg">
          <img
            alt="좋아요 누른 사람의 프로필사진"
            src="/images/Hojung/profile_img.jpeg"
          />
        </div>
        <div className="likeInfo">
          <Link className="likeUser">anieworld</Link>님{' '}
          <Link className="likeUserOther">외 10명</Link>이 좋아합니다
        </div>
      </div>
    );
  }
}

export default MainFeed;
