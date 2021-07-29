import React from 'react';
import PhotoProfile from './Photo/PhotoProfile/PhotoProfile';
import PhotoComment from './Photo/PhotoComment/PhotoComment';
import PhotoMain from './Photo/PhotoMain/PhotoMain';
import PhotoCommentForm from './Photo/PhotoCommentForm/PhotoCommentForm';
import styles from './Feed.module.scss';
class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: [],
    };
  }

  setParentState = (key, value) => {
    this.setState({ [key]: value });
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/Dongwu/commentData.json')
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({
          comments: data,
        });
      });
  }
  // backEnd data fetch
  // componentDidMount() {
  //   fetch('http://10.58.1.50:8000/posts/comments/' + this.props.postId)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       this.setState({
  //         comments: data.comments,
  //       });
  //     });
  // }

  render() {
    const { setParentState } = this;
    const { comments } = this.state;
    const { feedProfileImg, feedId, feedImg, feedText, userInfo } = this.props;

    return (
      <div className={`${styles.Feed}`}>
        <PhotoProfile feedProfileImg={feedProfileImg} feedId={feedId} />
        <PhotoMain feedImg={feedImg} />
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
        <PhotoComment
          feedId={feedId}
          feedText={feedText}
          comments={comments}
          userInfo={userInfo}
        />
        <PhotoCommentForm
          userInfo={userInfo}
          comments={comments}
          setParentState={setParentState}
        />
      </div>
    );
  }
}

export default Feed;
