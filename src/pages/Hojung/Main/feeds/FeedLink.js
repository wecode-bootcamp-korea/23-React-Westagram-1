import React from 'react';
import { Link } from 'react-router-dom';

class MainFeed extends React.Component {
  render() {
    return (
      <div className="feedLink">
        <div className="feedLinkLeft">
          <button onClick={this.postLike}>좋아요아이콘</button>
          <Link>
            <img alt="댓글 아이콘" src="/images/Hojung/feed_link_left2.png" />
          </Link>
          <Link>
            <img alt="쪽지 아이콘" src="/images/Hojung/feed_link_left3.png" />
          </Link>
        </div>
        <div className="feedLinkRight">
          <Link>
            <img
              alt="책갈피 아이콘"
              src="/images/Hojung/feed_link_right1.png"
            />
          </Link>
        </div>
      </div>
    );
  }
}

export default MainFeed;
