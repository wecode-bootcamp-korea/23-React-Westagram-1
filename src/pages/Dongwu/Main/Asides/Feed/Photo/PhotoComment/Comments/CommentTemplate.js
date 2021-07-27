import React from 'react';
import styles from './CommentTemplate.module.scss';

class CommentTemplate extends React.Component {
  render() {
    return (
      <li className={`${styles.commentsDesc}`}>
        <div>
          <a href="#">{this.props.userId}</a>
        </div>
        <div>
          <a href="#">{this.props.text}</a>
        </div>
      </li>
    );
  }
}

export default CommentTemplate;
