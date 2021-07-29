import React from 'react';

class FeedDesc extends React.Component {
  render() {
    return (
      <div className="feedDecs">
        <a href="/" className="feedWriter">
          canon_mj
        </a>
        <div className="feedTxt">
          {this.props.content} <a href="/">더 보기</a>
        </div>
      </div>
    );
  }
}

export default FeedDesc;
