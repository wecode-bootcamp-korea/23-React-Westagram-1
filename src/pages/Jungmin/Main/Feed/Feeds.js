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
  constructor(props) {
    super(props);
    this.state = {
      howManyHeart: 1,
    };
  }
  heartCheck = count => {
    this.setState({ howManyHeart: count });
  };
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
            <p>jjiny_1019</p>님 <p>외 {this.state.howManyHeart}명</p>이
            좋아합니다
          </div>
        </div>
        <div className="forPost">
          <div>
            <p>{this.props.feeduserId}</p> {this.props.content} <link />
          </div>
        </div>
        <Post
          id={this.props.id}
          userInfo={this.props.userInfo}
          heartCheck={this.heartCheck}
        />
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
    fetch('http://10.58.6.61:8000/postings/post/12')
      .then(res => res.json())
      .then(response => {
        this.setState({
          feeds: response.response,
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
              // alt={ele.alt}
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
