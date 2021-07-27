import React from 'react';
import styles from './PhotoComment.module.scss';
import Comments from './Comments/Comments';

class PhotoComment extends React.Component {
  render() {
    return (
      <div className={`${styles.photoDesc}`}>
        <div className={`${styles.photoDescLike}`}>
          <span>Like</span>
        </div>
        <div className={`${styles.photoDescUploader}`}>
          <span className={`${styles.photoDescId}`}>{this.props.feedId}</span>
          <span className={`${styles.photoDescText}`}>
            {this.props.feedText}
          </span>
          <span className={`${styles.photoDescMore}`}>...더 보기</span>
        </div>
        <Comments comments={this.props.comments} />
        <div className={`${styles.photoDate}`}>
          <span>55분 전</span>
        </div>
      </div>
    );
  }
}

export default PhotoComment;
