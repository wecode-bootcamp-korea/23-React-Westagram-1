import React from 'react';
import CommentInput from './CommentInput';
import FeedWriter from './FeedWriter';
import FeedImgs from './FeedImgs';
import FeedInfo from './FeedInfo';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.commentKey = 0;
    this.state = {
      comments: [],
      commentBtn: false,
    };
  }
  bringState = _comments => {
    this.commentKey = this.commentKey + 1;
    this.setState({
      comments: _comments,
      commentBtn: true,
    });
  };
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
    return (
      <>
        <div className="feed">
          <FeedWriter writer={this.props.writer} />
          <FeedImgs imgs={this.props.imgs} />
          <FeedInfo
            commentData={this.state.comments}
            commentLikeState={this.commentLikeState}
            commentDelete={this.commentDelete}
          />
          <CommentInput
            commentData={this.state.comments}
            btnState={this.state.commentBtn}
            keyData={this.commentKey}
            onSubmit={this.bringState}
            handleButtonState={this.handleButtonState}
            userId={this.props.userId}
            commentKey={this.commentKey}
          />
        </div>
      </>
    );
  }
}

export default Feed;
