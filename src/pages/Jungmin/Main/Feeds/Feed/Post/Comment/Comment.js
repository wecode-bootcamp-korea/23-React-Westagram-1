import React from 'react';
import './Comment.scss';

class Comment extends React.Component {
  render() {
    const { nickname, comment, changeLiked, id, isLiked } = this.props;
    return (
      <div className="forPost">
        <div>
          <p>{nickname}</p> {comment}
        </div>
        <button onClick={changeLiked}>
          <img
            alt="heart"
            className="commentHeart"
            id={id}
            src={
              isLiked
                ? '/images/Jungmin/heart.png'
                : 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png '
            }
          />
        </button>
      </div>
    );
  }
}

export default Comment;
