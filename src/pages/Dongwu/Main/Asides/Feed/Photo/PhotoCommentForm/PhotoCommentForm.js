import React from 'react';
import styles from './PhotoCommentForm.module.scss';
import PhotoCommentInput from './PhotoCommentInput';
class PhotoCommentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      commentsText: ``,
      input: {},
    };
  }

  setCommentsText = (key, value) => {
    this.setState({ [key]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let commentsInfo = {
      id: this.props.comments[this.props.comments.length - 1].id + 1,
      userId: this.props.userInfo.slice(0, this.props.userInfo.indexOf(`@`)),
      text: this.state.commentsText,
    };
    this.setState(state => {
      state.input.current.value = ``;
      this.props.setParentState(`comments`, [
        ...this.props.comments,
        commentsInfo,
      ]);
    });
  };

  render() {
    return (
      <form className={`${styles.commentsForm}`} onSubmit={this.handleSubmit}>
        <PhotoCommentInput setCommentsText={this.setCommentsText} />
        <i className="far fa-smile-wink"></i>
        <button>게시</button>
      </form>
    );
  }
}

export default PhotoCommentForm;
