import React from 'react';

import styles from './PhotoCommentInput.module.scss';

class PhotoCommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ``,
    };
  }
  handleInput = e => {
    const { setCommentText } = this.props;
    const { value } = e.target;

    setCommentText(value);
    this.setState({ value });
  };

  render() {
    const { handleInput } = this;
    const { value } = this.state;
    const { commentsText } = this.props;
    return (
      <label>
        <span className={!value ? styles.visible : styles.hidden}>
          댓글 달기...
        </span>
        <input type="text" onChange={handleInput} value={commentsText} />
      </label>
    );
  }
}

export default PhotoCommentInput;
