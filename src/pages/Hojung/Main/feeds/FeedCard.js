import React from 'react';
import CommentInput from './CommentInput';
import FeedWriter from './FeedWriter';
import FeedImgs from './FeedImgs';
import FeedInfo from './FeedInfo';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
      commentBtn: false,
    };
  }
  bringState = _comments => {
    this.setState({
      comments: _comments,
      commentBtn: true,
    });
  };
  y;
  componentDidMount() {
    fetch('http://10.58.1.50:8000/posts/' + `${this.props.id}/comments`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          comments: data.comments,
        });
      });
  }

  handleButtonState = e => {
    const isValid = e.target.value.length >= 1;
    this.setState({
      commentBtn: isValid,
    });
  };

  commentLikeState = _comments => {
    this.setState({
      comments: _comments,
    });
  };

  commentDelete = _comments => {
    this.setState({
      comments: _comments,
    });
  };

  render() {
    const { writer, imgs, userId, content } = this.props;
    const { comments, commentBtn, commentKey } = this.state;
    const { commentLikeState, commentDelete, bringState, handleButtonState } =
      this;
    return (
      <>
        <div className="feed">
          <FeedWriter writer={writer} />
          <FeedImgs imgs={imgs} />
          <FeedInfo
            commentData={comments}
            commentLikeState={commentLikeState}
            commentDelete={commentDelete}
            content={content}
          />
          <CommentInput
            commentData={comments}
            btnState={commentBtn}
            commentKey={commentKey}
            onSubmit={bringState}
            handleButtonState={handleButtonState}
            userId={userId}
          />
        </div>
      </>
    );
  }
}

export default Feed;
