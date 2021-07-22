import React, { Component } from 'react';
import Article from './Article';
import './Feed.scss';

class Feed extends Component {
  render() {
    return (
      <>
        <div className="feed">
          <Article
            profile="/images/Doyun/profile.png"
            main="/images/Doyun/dua_lipa.jpeg"
          />
        </div>
      </>
    );
  }
}

export default Feed;
