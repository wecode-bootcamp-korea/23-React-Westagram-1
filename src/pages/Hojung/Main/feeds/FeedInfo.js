import React from 'react';
import CommentList from './CommentList';
import FeedLink from './FeedLink';
import LikeCount from './LikeCount';
import FeedDesc from './FeedDesc';

class MainFeed extends React.Component {
  render() {
    const { commentData, commentLikeState, commentDelete, username, content } =
      this.props;
    return (
      <div className="feedInfoWrap">
        <FeedLink />
        <LikeCount />
        <FeedDesc content={content} />
        <CommentList
          commentData={commentData}
          commentLikeState={commentLikeState}
          commentDelete={commentDelete}
          username={username}
        />
      </div>
    );
  }
}

export default MainFeed;
