import React from 'react';

class CommentList extends React.Component {
  commentLike = e => {
    const _comments = Array.from(this.props.commentData);
    _comments.map(el => {
      console.log(el.key, e.target.parentElement.id);
      if (el.key === Number(e.target.parentElement.id)) {
        el.likeHeartBtn = !el.likeHeartBtn;
      }
    });
    this.props.commentLikeState(_comments);
  };

  commentDelete = e => {
    const _comments = Array.from(this.props.commentData);
    _comments.map((el, index) => {
      if (el.key === Number(e.target.parentElement.id)) {
        _comments.splice(index, 1);
      }
    });
    this.props.commentDelete(_comments);
  };

  render() {
    let commentLists = [];
    this.props.commentData.map(el => {
      commentLists.push(
        <li key={el.key} id={el.key}>
          <a href="/">{el.id}</a>
          {el.txt}
          <button
            onClick={this.commentLike}
            className={el.likeHeartBtn ? 'heartBtn active' : 'heartBtn'}
          >
            좋아요
          </button>
          <button className="deleteBtn" onClick={this.commentDelete}>
            삭제
          </button>
        </li>
      );
    });
    return (
      <div className="feedComment">
        <ul>{commentLists}</ul>
        <div className="feedTime">42분전</div>
      </div>
    );
  }
}

export default CommentList;
