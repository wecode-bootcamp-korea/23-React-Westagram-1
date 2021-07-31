import React from 'react';
import Feed from './Feed/Feed';
import './Feeds.scss';

class Feeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
    };
  }

  heartCountAndCheck = e => {
    const changefeed = [...this.state.feeds];
    changefeed.map(el => {
      if (el.id === Number(e.target.id)) {
        el.heartCheck
          ? (el.heartCount = --el.heartCount)
          : (el.heartCount = ++el.heartCount);
        el.heartCheck = !el.heartCheck;
      }
    });

    this.setState({
      feeds: changefeed,
    });
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/Jungmin/feedData.json')
      .then(res => res.json())
      .then(response => {
        this.setState({
          feeds: response,
        });
      });
  }

  render() {
    const feed = this.state.feeds;
    return (
      <>
        {feed.map(ele => {
          return (
            <Feed
              key={ele.id}
              id={ele.id}
              feeduserId={ele.feeduserId}
              alt={ele.alt}
              src={ele.src}
              userInfo={this.props.userInfo}
              content={ele.content}
              heartCheck={ele.heartCheck}
              heartCount={ele.heartCount}
              heartCountAndCheck={this.heartCountAndCheck}
            />
          );
        })}
      </>
    );
  }
}

export default Feeds;
