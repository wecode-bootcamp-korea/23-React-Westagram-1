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

  // setLike = (index, _like) => {
  //   this.setState(prevState => {
  //     prevState.feed.map(el =>
  //       el.id === index + 1 ? { ...el, like: _like + 1 } : el
  //     );
  //   });
  // };

  render() {
    return (
      <>
        <div className="feed">
          {this.state.feed.map((content, i) => {
            return (
              <Article
                add={this.addLike}
                setter={this.setLike}
                like={content.like}
                number={i}
                key={content.id}
                profile={content.profile}
                main={content.img}
              />
            );
          })}
        </div>
      </>
    );
  }
}

export default Feed;
