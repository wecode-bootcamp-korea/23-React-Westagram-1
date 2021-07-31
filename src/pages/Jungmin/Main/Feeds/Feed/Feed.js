import React from 'react';
import './Feed.scss';
import Post from './Post/Post';
import FeedName from './FeedName/FeedName';

class Feed extends React.Component {
  render() {
    const {
      feeduserId,
      alt,
      src,
      content,
      userInfo,
      id,
      heartCount,
      heartCheck,
      heartCountAndCheck,
    } = this.props;
    return (
      <article className="feed">
        <FeedName feeduserId={feeduserId} alt={alt} src={src} />
        <div>
          <img alt={alt} className="feedimg" src={src} />
        </div>
        <div className="feedmessage">
          <div className="feedUserIdandImg">
            <button
              type="button"
              className="heartButton"
              onClick={heartCountAndCheck}
            >
              <img
                alt="heart"
                id={this.props.id}
                className="heart"
                src={
                  heartCheck
                    ? '/images/Jungmin/heart.png'
                    : 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png '
                }
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
        <Post id={id} userInfo={userInfo} />
      </article>
    );
  }
}

export default Feed;
