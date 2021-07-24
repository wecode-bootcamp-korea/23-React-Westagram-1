import React from 'react';

class FeedDesc extends React.Component {
  render() {
    return (
      <div className="feedDecs">
        <a href="/" className="feedWriter">
          canon_mj
        </a>
        <div className="feedTxt">
          위워크에서 진행한 베이킹 클래스... <a href="/">더 보기</a>
        </div>
      </div>
    );
  }
}

export default FeedDesc;
