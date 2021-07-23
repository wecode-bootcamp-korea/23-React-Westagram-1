import React from 'react';
import styles from './FeedCommentsForm.module.scss';

class FeedCommentsInput extends React.Component {
  handleInput = e => {
    this.props.setCommentsText(`commentsText`, e.target.value);
  };

  render() {
    // console.log(`props>>>>>>`, this.props);
    // console.log(`state>>>>>>`, this.state);

    return (
      <label>
        <span id="commentsPlaceholder">댓글 달기...</span>
        <input type="text" name={123} onChange={this.handleInput} />
      </label>
    );
  }
}

class FeedCommentsForm extends React.Component {
  constructor() {
    super();
    this.state = {
      commentsText: ``,
      comment: [],
    };
  }

  setCommentsText = (key, value) => {
    this.setState({ [key]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    let commentsInfo = {
      id: this.state.comment.length + 1,
      userId: this.props.userInfo.slice(0, this.props.userInfo.indexOf(`@`)),
      text: this.state.commentsText,
    };
    this.setState(state => {
      state.comment.push(commentsInfo);
      this.props.setParentState(`commentsInfo`, this.state.comment);
    });
  };

  render() {
    return (
      <form className={`${styles.commentsForm}`} onSubmit={this.handleSubmit}>
        <FeedCommentsInput
          userInfo={this.props.userInfo}
          commentsInfo={this.props.commentsInfo}
          setCommentsText={this.setCommentsText}
        />
        <i className="far fa-smile-wink"></i>
        <button id="addCommentsBtn">게시</button>
      </form>
    );
  }
}

export default FeedCommentsForm;
