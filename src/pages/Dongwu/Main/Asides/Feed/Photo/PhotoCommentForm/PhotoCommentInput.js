import React from 'react';

class PhotoCommentInput extends React.Component {
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

export default PhotoCommentInput;
