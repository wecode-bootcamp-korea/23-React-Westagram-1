/*eslint-disable*/

import React from 'react';
import { withRouter } from 'react-router-dom';
import CommentList from './CommentList.js';

class Comment extends React.Component {
  render() {
    return (
      <div className="articleComment">
        <div className="commentIcons">
          <img className="iconHeart" src="../../images/Jungwoo/red_heart.png" />
          <img className="iconChat" src="../../images/Jungwoo/chat.png" />
          <img className="iconSend" src="../../images/Jungwoo/send.png" />
          <img
            className="iconBookMark"
            src="../../images/Jungwoo/bookmark.png"
          />
        </div>

        <div className="commentLike">
          <p>좋아요 1,065개</p>
        </div>

        <div className="commentHour">
          <p>5시간 전</p>
        </div>

        <div>
          <ul className="textBox">
            <CommentList commentList={this.props.replies} />
          </ul>
        </div>

        <div className="commentInput">
          <img src="../../images/Jungwoo/smile.png" />
          <input
            type="text"
            id="commentText"
            placeholder="댓글 달기..."
            onChange={this.textChange}
            onKeyPress={this.pressEnter}
            value={this.props.newReply}
          />
          <button onClick={this.addComment}>게시</button>
        </div>
      </div>
    );
  }
}

export default Comment;
