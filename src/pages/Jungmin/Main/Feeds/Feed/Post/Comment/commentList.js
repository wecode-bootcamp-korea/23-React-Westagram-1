import React from 'react';

class CommentList extends React.Component {
  Num = 0;
  constructor() {
    super();
    this.state = {
      comment: '',
      commentList: [],
    };
  }

  handleComment = e => {
    this.setState({
      comment: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.Num += 1;

    const newComment = {
      keyId: this.Num,
      userName: 'sujeong',
      content: this.state.comment,
      isLike: false,
    };

    this.state.comment &&
      this.setState({
        commentList: this.state.commentList.concat(newComment),
        comment: '',
      });
  };

  addComment = e => {
    console.log(e.keyCode);
    if (e.keyCode === 13 && this.state.comment.length > 0) {
      this.handleSubmit();
    }
  };

  changeButtonIcon = e => {
    this.setState({ isLiked: !this.state.isLiked });
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }

  render() {
    const comments = this.state.commentList.map(reply => (
      <li className="newCommentList" key={reply.keyId}>
        <span className="commentText">
          <span className="commenetUserId">{reply.userName}</span>
          {reply.content}
        </span>
        <span className="newCommentIcon">
          <img
            alt="하트"
            src={
              this.state.isLiked === true
                ? '/images/sujeonglee/heart_on.png'
                : '/images/sujeonglee/heart.png'
            }
            className="commentHeart"
            onClick={this.changeButtonIcon}
          />
          <span className="delete">X</span>
        </span>
      </li>
    ));
    return (
      <>
        <div className="commentRow">
          <ul className="newComment">{comments}</ul>
        </div>
        <div className="timeLog">
          <span>40분전</span>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="commentContainer">
            <input
              type="text"
              placeholder="댓글 달기..."
              className="commentBox"
              onChange={this.handleComment}
              onKeyUp={this.addComment}
              value={this.state.comment}
            />
            <button
              type="submit"
              className={`commentSubmit ${
                this.state.comment ? 'oncolor' : 'offcolor'
              }`}
            >
              게시
            </button>
          </div>
        </form>
      </>
    );
  }
}

export default CommentList;
