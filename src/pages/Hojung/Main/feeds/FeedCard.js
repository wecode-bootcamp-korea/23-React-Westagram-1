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
    fetch(`${process.env.REACT_APP_API}/postings/comment/${this.props.id}`)
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

  commentState = _comments => {
    this.setState({
      comments: _comments,
    });
  };

  render() {
    const { writer, imgs, id, content, username, feedList } = this.props;
    const { comments, commentBtn, commentKey } = this.state;
    const { commentState, bringState, handleButtonState } = this;
    return (
      <div className="feed">
        <FeedWriter writer={writer} />
        <FeedImgs imgs={imgs} />
        <FeedInfo
          commentData={comments}
          commentState={commentState}
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
    );
  }
}

export default Feed;
