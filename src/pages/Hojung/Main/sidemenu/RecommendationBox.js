import React from 'react';
import { INFO } from './RecommendData';
import { Link } from 'react-router-dom';

class RecommendationBox extends React.Component {
  render() {
    return (
      <div className="recommendationBox">
        <div className="tit">
          <h3>회원님을 위한 추천</h3>
          <Link>모두보기</Link>
        </div>
        <div className="con">
          <ul>
            {INFO.map(el => {
              return (
                <li key={el.id}>
                  <div className="recommedImg">
                    <img alt="추천 이미지" src={el.src} />
                  </div>
                  <div className="recommedUser">
                    <div className="user">{el.writer}</div>
                    <div className="userTxt">{el.writerText}</div>
                  </div>
                  <Link className="userFollow">팔로우</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default RecommendationBox;
