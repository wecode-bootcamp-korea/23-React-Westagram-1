import React from 'react';
import { Link } from 'react-router-dom';
import styles from './CommentTemplate.module.scss';

class CommentTemplate extends React.Component {
  render() {
    const { userId, text, userInfo } = this.props;
    return (
      <li className={`${styles.commentsDesc}`}>
        <div>
          <Link to={{ pathname: '/main-dongwu', state: { loginId: userInfo } }}>
            {userId}
          </Link>
        </div>
        <div>
          <Link to={{ pathname: '/main-dongwu', state: { loginId: userInfo } }}>
            {text}
          </Link>
        </div>
      </li>
    );
  }
}

export default CommentTemplate;
