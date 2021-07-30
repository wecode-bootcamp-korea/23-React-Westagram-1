import React from 'react';
import PhotoCommentInput from './PhotoCommentInput';

import styles from './PhotoCommentForm.module.scss';

class PhotoCommentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      commentsText: ``,
    };
  }

  setCommentText = value => {
    this.setState({ commentsText: value });
  };

  handleSubmit = e => {
    const { commentsText } = this.state;
    const { comments, userInfo, setCommentsList } = this.props;
    e.preventDefault();
    if (commentsText) {
      let commentInfo = {
        id: comments[comments.length - 1].id + 1,
        userId: userInfo.slice(0, userInfo.indexOf(`@`)),
        text: commentsText,
      };
      setCommentsList(commentInfo);
      this.setState(prevState => {
        return { ...prevState, commentsText: `` };
      });
    }
  };

  render() {
    const { handleSubmit, setCommentText } = this;
    const { commentsText } = this.state;

    return (
      <form className={`${styles.commentsForm}`} onSubmit={handleSubmit}>
        <PhotoCommentInput
          setCommentText={setCommentText}
          commentsText={commentsText}
        />
        <i className="far fa-smile-wink"></i>
        <button>게시</button>
      </form>
    );
  }
}

export default PhotoCommentForm;
