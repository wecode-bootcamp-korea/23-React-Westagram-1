/*eslint-disable*/

import React from 'react';
import { withRouter } from 'react-router-dom';
import CommentList from './CommentList.js';
import './Comment.scss';

class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      newReply: '',
      replies: [],
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:3000/data/Jungwoo/commentData.json', {})
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
    const { replies, newReply } = this.state;
    const { MyProfile } = this.props;
    let arr = replies;
    let newArr = arr.concat({
      userId: MyProfile[0].MyId,
      text: newReply,
    });

    this.setState({
      replies: newArr,
      newReply: '',
    });
  };

  pressEnter = event => {
    let { value } = event.target;
    if (event.key === 'Enter' && this.state.newReply) {
      this.addComment();
      value = '';
    }
  };

  render() {
    const { textChange, addComment, pressEnter } = this;
    const { replies, newReply } = this.state;
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
            <CommentList commentList={replies} />
          </ul>
        </div>
        <div className="commentInput">
          <img src="../../images/Jungwoo/smile.png" />
          <input
            type="text"
            id="commentText"
            placeholder="댓글 달기"
            onChange={textChange}
            onKeyPress={pressEnter}
          />
          <button onClick={addComment}>게시</button>
        </div>
      </div>
    );
  }
}

export default Comment;
