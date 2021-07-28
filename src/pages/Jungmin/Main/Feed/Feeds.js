import React from 'react';
import Post from '../Post/Post';
import './Feeds.scss';

class FeedName extends React.Component {
  render() {
    return (
      <div className="feedName">
        <div className="feedUserIdandImg">
          <img alt={this.props.alt} className="profil" src={this.props.src} />
          <p>{this.props.feeduserId}</p>
        </div>
        <div className="moreicon">
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
    );
  }
}

class Feed extends React.Component {
  render() {
    return (
      <article className="feed">
        <FeedName
          feeduserId={this.props.feeduserId}
          alt={this.props.alt}
          src={this.props.src}
        />
        <div>
          <img alt={this.props.alt} className="feedimg" src={this.props.src} />
        </div>
        <div className="feedmessage">
          <div className="feedUserIdandImg">
            <button type="button" className="heartButton">
              <img
                alt="heart"
                className="heart"
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png "
              />
            </button>
            <div className="messageButton">
              <i className="far fa-comment"></i>
            </div>
            <i className="fas fa-location-arrow direct"></i>
          </div>
          <div className="moreicon">
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>
        <div className="feedUserIdandImg">
          <img alt={this.props.alt} className="profil" src={this.props.src} />
          <div>
            <p>jjiny_1019</p>님 <p>외 {this.props.heartCheck}명</p>이 좋아합니다
          </div>
        </div>
        <Post userInfo={this.props.userInfo} />
      </article>
    );
  }
}

class Feeds extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/Jungmin/FeedData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          feeds: data,
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
              feeduserId={ele.feeduserId}
              alt={ele.alt}
              src={ele.src}
              userInfo={this.props.userInfo}
            />
          );
        })}
      </>
    );
  }
}

export default Feeds;
