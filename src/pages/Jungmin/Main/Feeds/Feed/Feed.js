import React from 'react';
import './Feed.scss';
import Post from './Post/Post';
import FeedName from './FeedName/FeedName';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      heartCount: 1,
    };
  }
  heartCheck = count => {
    this.setState({ heartCount: count });
  };
  render() {
    const { feeduserId, alt, src, content, userInfo, id } = this.props;
    const { heartCount } = this.state;
    return (
      <article className="feed">
        <FeedName feeduserId={feeduserId} alt={alt} src={src} />
        <div>
          <img alt={alt} className="feedimg" src={src} />
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
          <img alt={alt} className="profil" src={src} />
          <div>
            <p>jjiny_1019</p>님 <p>외 {heartCount}명</p>이 좋아합니다
          </div>
        </div>
        <div className="forPost">
          <div>
            <p>{feeduserId}</p> {content} <link />
          </div>
        </div>
        <Post id={id} userInfo={userInfo} heartCheck={this.heartCheck} />
      </article>
    );
  }
}

export default Feed;
