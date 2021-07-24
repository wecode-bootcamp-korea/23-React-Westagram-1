import React from 'react';

class RecommendationBox extends React.Component {
  render() {
    let RecommentData = [
      {
        src: '/images/Hojung/profile_img.jpeg',
        writer: '_yum_s',
        writerText: '_lenged_a님 외 10명이 팔로합니다.',
      },
      {
        src: '/images/Hojung/profile_img.jpeg',
        writer: 'hj___s2',
        writerText: '_lenged_a님이 팔로합니다.',
      },
      {
        src: '/images/Hojung/profile_img.jpeg',
        writer: 'w0nhong_____',
        writerText: 'hj___s2님이 팔로합니다.',
      },
    ];
    let RecommentLists = [];
    RecommentData.forEach(el => {
      RecommentLists.push(
        <li key={el.writer}>
          <div className="recommedImg">
            <img alt="스토리 이미지" src={el.src} />
          </div>
          <div className="recommedUser">
            <div className="user">{el.writer}</div>
            <div className="userTxt">{el.writerText}</div>
          </div>
          <a href="/" className="userFollow">
            팔로우
          </a>
        </li>
      );
    });
    return (
      <div className="recommendationBox">
        <div className="tit">
          <h3>회원님을 위한 추천</h3>
          <a href="/">모두보기</a>
        </div>
        <div className="con">
          <ul>{RecommentLists}</ul>
        </div>
      </div>
    );
  }
}

export default RecommendationBox;
