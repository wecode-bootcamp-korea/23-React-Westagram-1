import React from 'react';
import styles from './FeedCommentsForm.module.scss';

class FeedCommentsInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  handleInput = e => {
    console.log(this.state);
    this.setState(state => {
      state.commentsInfo.comment.text = e.target.value;
    });
  };

  render() {
    return (
      <label>
        <span id="commentsPlaceholder">댓글 달기...</span>
        <input
          type="text"
          name={this.state.commentsCount}
          onChange={this.handleInput}
        />
      </label>
    );
  }
}

class FeedCommentsForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      commentsInfo: {
        comment: [
          {
            userId: this.props.userInfo[`loginId`],
            text: '',
          },
        ],
      },
      commentsCount: 3,
      commentsTemplate: ``,
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState(state => {
      state.commentsInfo.comment.push({ userid: 1, text: 'hi' });
      state.commentsCount = state.commentsCount + 1;
    });
  };

  render() {
    return (
      <form className={`${styles.commentsForm}`} onSubmit={this.handleSubmit}>
        <FeedCommentsInput state={this.state} />
        <i className="far fa-smile-wink"></i>
        <button id="addCommentsBtn">게시</button>
      </form>
    );
  }
}

export default FeedCommentsForm;
