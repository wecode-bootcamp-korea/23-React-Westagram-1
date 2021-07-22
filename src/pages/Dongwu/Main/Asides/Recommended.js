import React from 'react';
import styles from './Recommended.module.scss';
import Footer from './Footer';

class Recommended extends React.Component {
  render() {
    return (
      <div className={`${styles.Recommended}`}>
        <div className={`${styles.userProfile}`}>
          <div className={`${styles.userProfileDesc}`}>
            <img
              alt="profile img"
              src={process.env.PUBLIC_URL + `/images/Dongwu/Main/freeImage.png`}
            />
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
                src={
                  process.env.PUBLIC_URL + `/images/Dongwu/Main/freeImage.png`
                }
              />
              <div className={`${styles.recommendedUserProfileId}`}>
                <span>id</span>
                <span>Westagram 신규 가입</span>
              </div>
            </div>
            <a href="#">팔로우</a>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Recommended;
