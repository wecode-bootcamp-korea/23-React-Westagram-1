import React, { Component } from 'react';
import Article from './Article';
import './Feed.scss';

class Feed extends Component {
  constructor() {
    super();
    this.state = {
      feed: [],
    };
  }

  componentDidMount() {
    fetch('/data/Doyun/feedData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          feed: data,
        });
      });
  }

  render() {
    return (
      <>
        <div className="feed">
          {this.state.feed.map((c, i) => {
            return <Article key={c.id} profile={c.profile} main={c.img} />;
          })}
        </div>
      </>
    );
  }
}

export default Feed;
