import React from 'react';

class CommentList extends React.Component {
  commentLike = e => {
    const { commentData, commentLikeState } = this.props;
    const { parentElement } = e.target;
    const _comments = Array.from(commentData);
    _comments.map(el => {
      if (el.key === Number(parentElement.id)) {
        el.likeHeartBtn = !el.likeHeartBtn;
      }
    });
    commentLikeState(_comments);
  };

  commentDelete = e => {
    const { commentData, commentDelete } = this.props;
    const { parentElement } = e.target;
    const _comments = Array.from(commentData);
    _comments.map((el, index) => {
      if (el.key === Number(parentElement.id)) {
        _comments.splice(index, 1);
      }
    });
    commentDelete(_comments);
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
