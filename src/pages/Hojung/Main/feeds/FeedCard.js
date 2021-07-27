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

  componentDidMount() {
    fetch('/data/Hojung/commentData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          comments: data,
        });
      });
  }

  handleButtonState = e => {
    e.target.value.length >= 1
      ? this.setState({ commentBtn: true })
      : this.setState({ commentBtn: false });
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
    const { writer, imgs, userId } = this.props;
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
