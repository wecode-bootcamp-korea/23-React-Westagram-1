import React from 'react';
import styles from './PhotoProfile.module.scss';

class PhotoProfile extends React.Component {
  render() {
    return (
      <div className={`${styles.photoTitle}`}>
        <div className={`${styles.photoProfile}`}>
          <img
            alt="프로필 사진"
            src={process.env.PUBLIC_URL + this.props.feedProfileImg}
          />
          <span>{this.props.feedId}</span>
        </div>
        <i className="fas fa-ellipsis-h"></i>
      </div>
    );
  }
}

export default PhotoProfile;
