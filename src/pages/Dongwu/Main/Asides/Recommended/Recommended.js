import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer/Footer';

import styles from './Recommended.module.scss';

class Recommended extends React.Component {
  render() {
    const { userInfo } = this.props;
    return (
      <div className={`${styles.Recommended}`}>
        <div className={`${styles.userProfile}`}>
          <div className={`${styles.userProfileDesc}`}>
            <img alt="profile img" src="/images/Dongwu/Main/freeImage.png" />
            <span>steam_udon</span>
          </div>
          <div className={`${styles.userProfileConvert}`}>
            <span>전환</span>
          </div>
        </div>
        <div className={`${styles.recommendText}`}>
          <p>회원님을 위한 추천</p>
          <p>모두 보기</p>
        </div>
        <div className={`${styles.recommendedUserContainer}`}>
          <div className={`${styles.recommendedUserProfile}`}>
            <div className={`${styles.recommendedUserProfileDesc}`}>
              <img
                alt="recommended user profile img"
                src="/images/Dongwu/Main/freeImage.png"
              />
              <div className={`${styles.recommendedUserProfileId}`}>
                <span>id</span>
                <span>Westagram 신규 가입</span>
              </div>
            </div>
            <Link
              to={{ pathname: '/main-dongwu', state: { loginId: userInfo } }}
            >
              팔로우
            </Link>
          </div>
        </div>
        <Footer userInfo={userInfo} />
      </div>
    );
  }
}

export default Recommended;
