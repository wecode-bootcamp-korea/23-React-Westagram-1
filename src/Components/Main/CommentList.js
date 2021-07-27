import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentList extends React.Component {
  render() {
    return (
      <>
        {this.props.commentList.map(e => (
          <li>
            {e.userId}
            <a>{e.text}</a>
          </li>
        ))}
      </>
    );
  }
}

export default CommentList;
