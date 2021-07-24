import React from 'react';
import CommentList from './CommentList';
import FeedLink from './FeedLink';
import LikeCount from './LikeCount';
import FeedDesc from './FeedDesc';

class MainFeed extends React.Component {
  render() {
    return (
      <div className="feedInfoWrap">
        <FeedLink />
        <LikeCount />
        <FeedDesc />
        <CommentList
          commentData={this.props.commentData}
          commentLikeState={this.props.commentLikeState}
          commentDelete={this.props.commentDelete}
          userId={this.props.userId}
        />
      </div>
    );
  }
}

export default MainFeed;
