import React from 'react';
import CommentList from './CommentList';
import FeedLink from './FeedLink';
import LikeCount from './LikeCount';
import FeedDesc from './FeedDesc';

class MainFeed extends React.Component {
  render() {
    const { commentData, commentLikeState, commentDelete, userId } = this.props;
    return (
      <div className="feedInfoWrap">
        <FeedLink />
        <LikeCount />
        <FeedDesc />
        <CommentList
          commentData={commentData}
          commentLikeState={commentLikeState}
          commentDelete={commentDelete}
          userId={userId}
        />
      </div>
    );
  }
}

export default MainFeed;