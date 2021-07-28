import React from 'react';
import styles from './PhotoComment.module.scss';
import Comments from './Comments/Comments';

class PhotoComment extends React.Component {
  render() {
    const { feedId, feedText, comments, userInfo } = this.props;
    return (
      <div className={`${styles.photoDesc}`}>
        <div className={`${styles.photoDescLike}`}>
          <span>Like</span>
        </div>
        <div className={`${styles.photoDescUploader}`}>
          <span className={`${styles.photoDescId}`}>{feedId}</span>
          <span className={`${styles.photoDescText}`}>{feedText}</span>
          <span className={`${styles.photoDescMore}`}>...더 보기</span>
        </div>
        <Comments comments={comments} userInfo={userInfo} />
        <div className={`${styles.photoDate}`}>
          <span>55분 전</span>
        </div>
      </div>
    );
  }
}

export default PhotoComment;
