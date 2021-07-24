import React from 'react';

class CommentInput extends React.Component {
  commentAdd = e => {
    e.preventDefault();
    if (e.target.comment.value === '') {
      alert('댓글을 입력해주세요!');
      return;
    }
    const _comments = this.props.commentData.concat({
      id: this.props.userId,
      txt: e.target.comment.value,
      likeHeartBtn: false,
      key: this.props.keyData,
    });
    this.props.onSubmit(_comments);
    e.target.comment.value = '';
  };
  handleButton = e => {
    this.props.handleButtonState(e);
  };
  render() {
    return (
      <div className="feedCommentInput">
        <form onSubmit={this.commentAdd}>
          <input
            type="text"
            className="input"
            name="comment"
            placeholder="댓글달기..."
            onKeyUp={this.props.handleButtonState}
          />
          <button
            className={this.props.btnState ? 'commentBtn active' : 'commentBtn'}
          >
            게시
          </button>
        </form>
      </div>
    );
  }
}

export default CommentInput;
