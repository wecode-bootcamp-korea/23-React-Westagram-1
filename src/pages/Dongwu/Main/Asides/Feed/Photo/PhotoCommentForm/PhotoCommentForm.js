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

  setCommentFormState = (key, value) => {
    this.setState({ [key]: value });
  };

  handleSubmit = e => {
    const { commentsText, input } = this.state;
    const { comments, userInfo, setParentState } = this.props;
    e.preventDefault();
    if (input.current.value) {
      let commentsInfo = {
        id: comments[comments.length - 1].id + 1,
        userId: userInfo.slice(0, userInfo.indexOf(`@`)),
        text: commentsText,
      };
      this.setState(state => {
        state.input.current.value = ``;
        setParentState(`comments`, [...comments, commentsInfo]);
      });
    }
  };

  render() {
    const { handleSubmit, setCommentFormState } = this;

    return (
      <form className={`${styles.commentsForm}`} onSubmit={handleSubmit}>
        <PhotoCommentInput setCommentFormState={setCommentFormState} />
        <i className="far fa-smile-wink"></i>
        <button>게시</button>
      </form>
    );
  }
}

export default PhotoCommentForm;
