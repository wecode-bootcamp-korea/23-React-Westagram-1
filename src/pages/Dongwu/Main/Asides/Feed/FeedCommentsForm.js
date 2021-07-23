import React from 'react';
import styles from './FeedCommentsForm.module.scss';

class FeedCommentsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: `visible`,
      input: React.createRef(),
    };
  }
  handleInput = e => {
    this.props.setCommentsText(`commentsText`, e.target.value);
    this.props.setCommentsText(`input`, this.state.input);
    !e.target.value
      ? this.setState({ visibility: `visible` })
      : this.setState({ visibility: `hidden` });
  };

  render() {
    return (
      <label>
        <span id="commentsPlaceholder" style={this.state}>
          댓글 달기...
        </span>
        <input type="text" onChange={this.handleInput} ref={this.state.input} />
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
      input: {},
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
      state.input.current.value = ``;
      this.props.setParentState(`commentsInfo`, this.state.comment);
    });
  };

  render() {
    console.log(this.state.input.current);
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
