/*eslint-disable*/

import React from 'react';
import { withRouter } from 'react-router-dom';
import Footer from './Footer.js';
import './RightFeed.scss';

class RightFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      userProfile: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/Jungwoo/userProfile.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        this.setState({
          userProfile: data,
        });
      });
  }

  render() {
    const { MyProfile } = this.props;
    const { userProfile } = this.state;
    return (
      <div className="rightFeed">
        <div className="myProfile">
          <img src="../../images/Jungwoo/caleb-ekeroth.jpg" />
          <span>
            <h6 className="navId">{MyProfile[0].MyId}</h6>
            <p>{MyProfile[0].MyName}</p>
          </span>
          <p className="textBlue">전환</p>
        </div>
        <div className="RecommendTitle">
          <h6>회원님을 위한 추천</h6>
          <p>모두 보기</p>
        </div>
        <div>
          {userProfile.map(el => {
            return (
              <div className="userProfile">
                <img src={el.url} />
                <span>
                  <p className="navId">{el.userId}</p>
                  <p className="userProfileName">{el.userName}</p>
                </span>
                <p className="textBlue">프로필</p>
              </div>
            );
          })}
        </div>
        <Footer />
      </div>
    );
  }
}

export default RightFeed;
