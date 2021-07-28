import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Story.module.scss';

class Story extends React.Component {
  render() {
    const { userInfo } = this.props;
    return (
      <div className={`${styles.Story}`}>
        <div className={`${styles.storyWrapBlock}`}>
          <div className={`${styles.storyProfile}`}>
            <Link
              to={{ pathname: '/main-dongwu', state: { loginId: userInfo } }}
            >
              <img
                alt="story profile img"
                src={
                  process.env.PUBLIC_URL + `/images/Dongwu/Main/freeImage.png`
                }
              />
            </Link>

            <span>dongwu_</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Story;
