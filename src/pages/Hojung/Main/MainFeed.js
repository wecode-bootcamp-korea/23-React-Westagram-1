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
    fetch('http://10.58.1.50:8000/posts', {
      //headers: {
      //  Authorization: localStorage.getItem('token'),
      //},
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          feedList: data.posts,
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
              <FeedCard
                key={feed.id}
                id={feed.id}
                content={feed.content}
                writer={feed.user_name}
                imgs={feed.img}
                userId={userId}
              />
            );
          })}
        </article>
      </div>
    );
  }
}

export default MainFeed;
