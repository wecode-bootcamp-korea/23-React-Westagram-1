import React from 'react';

class MainFeed extends React.Component {
  render() {
    return (
      <div className="feedLink">
        <div className="feedLinkLeft">
          <a href="/">
            <img alt="좋아요 아이콘" src="/images/Hojung/feed_link_left1.png" />
          </a>
          <a href="/">
            <img alt="댓글 아이콘" src="/images/Hojung/feed_link_left2.png" />
          </a>
          <a href="/">
            <img alt="쪽지 아이콘" src="/images/Hojung/feed_link_left3.png" />
          </a>
        </div>
        <div className="feedLinkRight">
          <a href="/">
            <img
              alt="책갈피 아이콘"
              src="/images/Hojung/feed_link_right1.png"
            />
          </a>
        </div>
      </div>
    );
  }
}

export default MainFeed;
