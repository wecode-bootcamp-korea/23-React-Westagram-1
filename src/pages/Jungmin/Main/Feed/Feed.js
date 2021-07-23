import React from 'react';
import Post from '../Post/Post';
import './Feed.scss';

class FeedName extends React.Component {
  render() {
    return (
      <div className="feedName">
        <div className="feedUserIdandImg">
          <img
            alt="mango_9324Profilimg"
            className="profil"
            src="/images/Jungmin/sel2.jpg"
          />
          <p>{this.props.Nickname}</p>
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
        <FeedName Nickname={'mango_9324'} />
        <div>
          <img
            alt="mango_9324Profilimg"
            className="feedimg"
            src="/images/Jungmin/sel2.jpg"
          />
        </div>
        <div className="feedmessage">
          <div className="feedUserIdandImg">
            <img
              alt="heart"
              className="heart"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png "
            />
            <div className="messageButton">
              <button type="button">
                <i className="far fa-comment"></i>
              </button>
            </div>
            <i className="fas fa-location-arrow direct"></i>
          </div>
          <div className="moreicon">
            <i className="fas fa-ellipsis-h"></i>
          </div>
        </div>
        <div className="feedUserIdandImg">
          <img
            alt="mango_9324Profilimg"
            className="profil"
            src="/images/Jungmin/sel2.jpg"
          />
          <div>
            <p>jjiny_1019</p>님 <p>외 10명</p>이 좋아합니다
          </div>
        </div>
        <Post />
      </article>
    );
  }
}

export default Feed;
