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
              key={ele.feeduserId}
              id={ele.id}
              feeduserId={ele.feeduserId}
              alt={ele.alt}
              src={ele.src}
              userInfo={this.props.userInfo}
              content={ele.content}
            />
          );
        })}
      </>
    );
  }
}

export default Feeds;
