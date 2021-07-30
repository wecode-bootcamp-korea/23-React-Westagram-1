import React from 'react';
import { Link } from 'react-router-dom';

class FeedDesc extends React.Component {
  render() {
    return (
      <div className="feedDecs">
        <Link className="feedWriter">canon_mj</Link>
        <div className="feedTxt">
          {this.props.content} <a href="/">더 보기</a>
        </div>
      </div>
    );
  }
}

export default FeedDesc;
