import React from 'react';

class CommentInput extends React.Component {
  commentAdd = e => {
    const { commentData, onSubmit } = this.props;
    const { comment } = e.target;
    e.preventDefault();
    if (comment.value === '') {
      alert('댓글을 입력해주세요!');
      return;
    }
    console.log('>>>>>' + comment.value);
    // const comment_value = console.log(this.props.id);
    fetch(`http://10.58.3.149:8000/postings/comment/${this.props.id}`, {
      method: 'POST',
      body: JSON.stringify({
        post: this.props.id,
        comment_text: comment.value,
      }),
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(datas => {
        console.log(datas);
      });
    const data = commentData.concat({
      id: commentData[commentData.length - 1].id + 1,
      name: this.props.username,
      comment_text: comment.value,
    });
    onSubmit(data);
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
