import React from 'react';
import './Post.scss';

class Comment extends React.Component {
  render() {
    return (
      <div className="forPost">
        <div>
          <p>{this.props.nickname}</p> {this.props.comment}
        </div>
        <img
          alt="heart"
          id="heart"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png "
        />
      </div>
    );
  }
}

class Post extends React.Component {
  render() {
    return (
      <div className="post">
        <Comment nickname={'hh.vv'} comment={'오 멋진 걸'} />
        <Comment nickname={'seoyun1203'} comment={'하이 에이치 아이 !!'} />
        <div className="commendTime  username ">
          <div>42분 전</div>
        </div>
        <div className="message">
          <input
            type="text"
            className="textMessage username"
            placeholder="댓글 달기..."
          />
          <button className="postButton">게시</button>
        </div>
      </div>
    );
  }
}

export default Post;
