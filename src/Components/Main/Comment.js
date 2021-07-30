/*eslint-disable*/

import React from 'react';
import { withRouter } from 'react-router-dom';
import CommentList from './CommentList.js';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      newReply: '',
      replies: [],
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/data/Jungwoo/commentData.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        this.setState({
          replies: data,
        });
      });
  };

  textChange = e => {
    let { value } = e.target;
    this.setState({
      newReply: value,
    });
  };

  addComment = () => {
    let arr = this.state.replies;
    arr.push({
      userId: this.props.MyProfile[0].MyId,
      text: this.state.newReply,
    });

    this.setState({
      replies: arr,
      newReply: '',
    });
  };

  pressEnter = e => {
    if (e.key === 'Enter' && this.state.newReply) {
      this.addComment();
      e.target.value = '';
    }
  };

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
            <CommentList commentList={this.state.replies} />
          </ul>
        </div>

        <div className="commentInput">
          <img src="../../images/Jungwoo/smile.png" />
          <input
            type="text"
            id="commentText"
            placeholder="댓글 달기"
            onChange={this.textChange}
            onKeyPress={this.pressEnter}
            value={this.state.newReply}
          />
          <button onClick={this.addComment}>게시</button>
        </div>
      </div>
    );
  }
}

export default Comment;
