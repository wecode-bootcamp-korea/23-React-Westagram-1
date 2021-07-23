import React from 'react';
import styles from './FeedComments.module.scss';
class FeedComments extends React.Component {
  render() {
    const commentsArr = this.props.commentsInfo;
    let comments = commentsArr.map(elem => {
      return (
        <div key={elem.id} className={`${styles.commentsDesc}`}>
          <div>
            <a href="">{elem.userId}</a>
          </div>
          <div>
            <a href="">{elem.text}</a>
          </div>
        </div>
      );
    });

    return (
      <div className={`${styles.photoComments}`}>
        <div className={`${styles.hidden}`}>
          <a href="#">
            댓글
            <span id="commentsCount">3</span>개 모두 보기
          </a>
        </div>
        {comments}
      </div>
    );
  }
}

export default FeedComments;
