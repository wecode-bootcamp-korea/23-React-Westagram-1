import React from 'react';
import FeedCard from './feeds/FeedCard';

class MainFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      feedList: [],
    };
  }

  componentDidMount() {
    fetch(`${process.env.REACT_APP_API}/postings/post/12`, {})
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          feedList: data.response,
        });
      });
  }

  render() {
    const { username } = this.props;
    return (
      <div className="feeds">
        <article>
          {this.state.feedList.map(feed => {
            return (
              <FeedCard
                key={feed.id}
                id={feed.id}
                content={feed.content}
                writer={feed.feeduserId}
                imgs={feed.src}
                username={username}
              />
            );
          })}
        </article>
      </div>
    );
  }
}

export default MainFeed;
