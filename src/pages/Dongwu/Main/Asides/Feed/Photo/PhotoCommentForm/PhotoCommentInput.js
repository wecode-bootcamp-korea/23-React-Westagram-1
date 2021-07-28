import React from 'react';
import styles from './PhotoCommentInput.module.scss';

class PhotoCommentInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: styles.visible,
      input: React.createRef(),
    };
  }
  handleInput = e => {
    const { input } = this.state;
    const { setCommentFormState } = this.props;
    const { value } = e.target;

    setCommentFormState(`commentsText`, value);
    setCommentFormState(`input`, input);

    !value
      ? this.setState({ visibility: styles.visible })
      : this.setState({ visibility: styles.hidden });
  };

  render() {
    const { handleInput } = this;
    const { visibility, input } = this.state;
    return (
      <label>
        <span id="commentsPlaceholder" className={`${visibility}`}>
          댓글 달기...
        </span>
        <input type="text" onChange={handleInput} ref={input} />
      </label>
    );
  }
}

export default PhotoCommentInput;
