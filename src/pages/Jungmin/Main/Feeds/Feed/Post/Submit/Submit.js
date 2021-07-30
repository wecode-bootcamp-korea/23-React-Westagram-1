import React from 'react';
import './Submit.scss';

class Submit extends React.Component {
  render() {
    const { messageChangeState, value, changeCommend } = this.props;
    return (
      <form className="submit" onSubmit={messageChangeState}>
        <input
          type="text"
          className="textMessage username"
          placeholder="댓글 달기..."
          value={value}
          onChange={changeCommend}
        />
        <button
          className={
            value ? 'postButton postButtonOn' : 'postButton postButtonoff'
          }
          type="submit"
        >
          게시
        </button>
      </form>
    );
  }
}

export default Submit;
