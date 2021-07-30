import React from 'react';

import styles from './PhotoProfile.module.scss';

class PhotoProfile extends React.Component {
  render() {
    const { feedProfileImg, feedId } = this.props;
    return (
      <div className={`${styles.photoTitle}`}>
        <div className={`${styles.photoProfile}`}>
          <img alt="프로필 사진" src={feedProfileImg} />
          <span>{feedId}</span>
        </div>
        <i className="fas fa-ellipsis-h"></i>
      </div>
    );
  }
}

export default PhotoProfile;
