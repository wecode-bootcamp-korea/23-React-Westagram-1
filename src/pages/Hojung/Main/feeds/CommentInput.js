import React from 'react';

class CommentInput extends React.Component {
  commentAdd = e => {
    const { commentData, onSubmit, userId } = this.props;
    const { comment } = e.target;
    e.preventDefault();
    if (comment.value === '') {
      alert('댓글을 입력해주세요!');
      return;
    }
    const _comments = commentData.concat({
      id: userId,
      txt: comment.value,
      likeHeartBtn: false,
      key: commentData[commentData.length - 1].key + 1,
    });
    onSubmit(_comments);
    comment.value = '';
  };

  handleButton = e => {
    const { handleButtonState } = this.props;
    handleButtonState(e);
  };

  render() {
    const { commentAdd } = this;
    const { handleButtonState, btnState } = this.props;
    return (
      <div className="feedCommentInput">
        <form onSubmit={commentAdd}>
          <input
            type="text"
            className="input"
            name="comment"
            placeholder="댓글달기..."
            onKeyUp={handleButtonState}
          />
          <button className={btnState ? 'commentBtn active' : 'commentBtn'}>
            게시
          </button>
        </form>
      </div>
    );
  }
}

export default CommentInput;
