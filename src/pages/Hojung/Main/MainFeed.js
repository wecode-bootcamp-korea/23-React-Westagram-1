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
    fetch('/data/Hojung/FeedData.json')
      .then(res => {
        console.log(res);
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({
          feedList: data,
        });
      });
  }

  render() {
    const { userId } = this.props;
    return (
      <div className="feeds">
        <article>
          {this.state.feedList.map(feed => {
            return (
              <FeedCard writer={feed.writer} imgs={feed.imgs} userId={userId} />
            );
          })}
        </article>
      </div>
    );
  }
}

export default MainFeed;
