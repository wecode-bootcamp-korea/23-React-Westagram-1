import React from 'react';

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
          <a href="/" className="likeUser">
            anieworld
          </a>
          님{' '}
          <a href="/" className="likeUserOther">
            외 10명
          </a>
          이 좋아합니다
        </div>
      </div>
    );
  }
}

export default MainFeed;
