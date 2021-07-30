/*eslint-disable*/

import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentList extends React.Component {
  render() {
    const { commentList } = this.props;
    return (
      <>
        {commentList.map(event => (
          <li>
            {event.userId}
            <a>{event.text}</a>
          </li>
        ))}
      </>
    );
  }
}

export default CommentList;
