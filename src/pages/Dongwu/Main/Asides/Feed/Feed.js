import React from 'react';
import styles from './Feed.module.scss';
import PhotoProfile from './Photo/PhotoProfile/PhotoProfile';
import PhotoComment from './Photo/PhotoComment/PhotoComment';
import PhotoMain from './Photo/PhotoMain/PhotoMain';
import PhotoCommentForm from './Photo/PhotoCommentForm/PhotoCommentForm';
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
        console.log(res);
        return res.json();
      })
      .then(data => {
        this.setState({
          comments: data,
        });
      });
  }

  render() {
    console.log(this.state.comments);
    return (
      <div className={`${styles.Feed}`}>
        <PhotoProfile
          feedProfileImg={this.props.feedProfileImg}
          feedId={this.props.feedId}
        />
        <PhotoMain feedImg={this.props.feedImg} />
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
          feedId={this.props.feedId}
          feedText={this.props.feedText}
          comments={this.state.comments}
        />
        <PhotoCommentForm
          userInfo={this.props.userInfo}
          comments={this.state.comments}
          setParentState={this.setParentState}
        />
      </div>
    );
  }
}

export default Feed;
