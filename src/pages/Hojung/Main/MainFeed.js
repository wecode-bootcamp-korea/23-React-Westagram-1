import React from 'react';
import FeedCard from './feeds/FeedCard';

class MainFeed extends React.Component {
  render() {
    return (
      <div className="feeds">
        <article>
          <FeedCard
            writer={'hj___s2'}
            imgs={'/images/Hojung/feed_img.png'}
            userId={this.props.userId}
          />
          <FeedCard
            writer={'w0nhong__'}
            imgs={'/images/Hojung/feed_img2.png'}
          />
        </article>
      </div>
    );
  }
}

export default MainFeed;
