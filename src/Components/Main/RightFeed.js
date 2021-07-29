/*eslint-disable*/

import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from './Footer.js';

class RightFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      userProfile: [
        {
          url: '../../images/Jungwoo/ photo-124941274df.jpeg',
          userId: 'abcdfdgas',
          userName: '김슬기',
        },
        {
          url: '../../images/Jungwoo/photo-1626318291075-17d488564b0b.jpeg',
          userId: 'abdsdasaf',
          userName: '하상현',
        },
        {
          url: '../../images/Jungwoo/photo-1593642532871-8b12e02d091c (1).jpeg',
          userId: 'abcddgfss',
          userName: '이봉주',
        },
        {
          url: '../../images/Jungwoo/photo-1626322730283-fd66ddea926c.jpeg',
          userId: 'absdfdsdf',
          userName: '한사랑',
        },
        {
          url: '../../images/Jungwoo/photo-1626318291075-17d488564b0b.jpeg',
          userId: 'abgdfcsdf',
          userName: '하리보',
        },
      ],
    };
  }
  render() {
    console.log(this.props);
    return (
      <div className="main-right">
        <div className="rightProfile">
          <img
            className="profileJungwoo"
            src="../../images/Jungwoo/caleb-ekeroth.jpg"
          />
          <div className="rightProfileclassName">
            <p className="navId">{this.props.MyProfile[0].MyId}</p>
            <p id="navName">{this.props.MyProfile[0].MyName}</p>
          </div>
          <p className="rightRecommendTextBlue">전환</p>
        </div>
        <div className="rightRecommend">
          <div className="rightRecommendTitle">
            <h6>회원님을 위한 추천</h6>
            <p className="rightRecommendTextBlue">모두 보기</p>
          </div>
          <div className="rightRecommendPeople">
            <div className="rightRecommendPerson">
              {this.state.userProfile.map(e => {
                return (
                  <div className="rightProfile">
                    <img className="rightProfileImg" src={e.url} />
                    <div className="rightProfileclassName">
                      <p className="navId">{e.userId}</p>
                      <p className="rightprofilenavName">{e.userName}</p>
                    </div>
                    <p className="rightRecommendTextBlue">프로필</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

export default RightFeed;
