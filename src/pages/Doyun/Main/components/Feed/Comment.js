import React, { Component } from 'react';
import './Comment.scss';

export class Comment extends Component {
  render() {
    const { img, id, msg } = this.props;
    return (
      <>
        <div className="comment">
          <img className="profile" src={img} alt="profile" />
          <li id={id} className="comment">
            {msg}
          </li>
        </div>
      </>
    );
  }
}

export default Comment;
