import React from 'react';
import styles from './Comments.module.scss';
import CommentTemplate from './CommentTemplate';
class Comments extends React.Component {
  render() {
    const { comments, userInfo } = this.props;
    return (
      <div className={`${styles.photoComments}`}>
        <div className={`${styles.hidden}`}>
          <span>댓글 3개 모두 보기</span>
        </div>
        {comments.map(elem => {
          return (
            <CommentTemplate
              key={elem.id}
              userId={elem.userId}
              text={elem.text}
              userInfo={userInfo}
            />
          );
        })}
      </div>
    );
  }
}

export default Comments;
