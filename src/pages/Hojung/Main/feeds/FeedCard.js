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
      postBrn: false,
    };
  }

  componentDidMount() {
    fetch(`http://10.58.3.149:8000/postings/comment/${this.props.id}`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          comments: data.response,
        });
      });
  }

  bringState = data => {
    this.setState({
      comments: data,
      commentBtn: true,
    });
  };

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
    const { writer, imgs, id, content, username, feedList } = this.props;
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
            username={username}
            feedList={feedList}
          />
          <CommentInput
            commentData={comments}
            btnState={commentBtn}
            commentKey={commentKey}
            onSubmit={bringState}
            handleButtonState={handleButtonState}
            id={id}
            username={username}
          />
        </div>
      </>
    );
  }
}

export default Feed;
