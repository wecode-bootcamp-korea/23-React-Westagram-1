import React from 'react';
import styles from './Feed.module.scss';
import Story from '../Story';
import FeedCommentsForm from './FeedCommentsForm';
import FeedComments from './FeedComments';

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsInfo: [],
    };
  }

  setParentState = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {
    console.log(this.state.commentsInfo);
    return (
      <div className={`${styles.Feed}`}>
        <Story />
        <div className={`${styles.photoWrap}`}>
          <div className={`${styles.photoTitle}`}>
            <div className={`${styles.photoProfile}`}>
              <img
                alt="프로필 사진"
                src={
                  process.env.PUBLIC_URL + `/images/Dongwu/Main/freeImage.png`
                }
              />
              <span>steam_udon</span>
            </div>
            <i className="fas fa-ellipsis-h"></i>
          </div>
          <div className={`${styles.photoMain}`}>
            <img
              alt="main photo"
              src={process.env.PUBLIC_URL + `/images/Dongwu/Main/freeImage.png`}
            />
          </div>
          <div className={`${styles.photoIcons}`}>
            <div className={`${styles.photoIconsLeft}`}>
              <button>
                <i className="far fa-heart"></i>
              </button>
              <button>
                <i className="far fa-comment"></i>
              </button>
              <button>
                <i className="fab fa-telegram-plane"></i>
              </button>
            </div>

            <div className={`${styles.photoIconsRight}`}>
              <button>
                <i className="far fa-bookmark"></i>
              </button>
            </div>
          </div>
          <div className={`${styles.photoDesc}`}>
            <div className={`${styles.photoDescLike}`}>
              <span>Like</span>
            </div>
            <div className={`${styles.photoDescUploader}`}>
              <span className={`${styles.photoDescId}`}>steam_udon</span>
              <span className={`${styles.photoDescText}`}>가나다라마바사</span>
              <span className={`${styles.photoDescMore}`}>...더 보기</span>
            </div>
            <FeedComments commentsInfo={this.state.commentsInfo} />
            <div className={`${styles.photoDate}`}>
              <span>55분 전</span>
            </div>
          </div>
          <FeedCommentsForm
            userInfo={this.props.userInfo}
            commentsInfo={this.state.commentsInfo}
            setParentState={this.setParentState}
          />
        </div>
      </div>
    );
  }
}

export default Feed;
