import React from 'react';
import styles from './FeedComments.module.scss';

class FeedComments extends React.Component {
  render() {
    return (
      <div className={`${styles.photoComments}`}>
        <div className={`${styles.hidden}`}>
          <a href="#">
            댓글
            <span id="commentsCount">3</span>개 모두 보기
          </a>
        </div>
        <div className={`${styles.commentsDesc}`}>
          <div>
            <a href="">steam_udon</a>
          </div>
          <div>
            <a href="">hi</a>
          </div>
        </div>
      </div>
    );
  }
}

export default FeedComments;
