import React from 'react';

import styles from './Story.module.scss';

class Story extends React.Component {
  render() {
    return (
      <div className={`${styles.Story}`}>
        <div className={`${styles.storyWrapBlock}`}>
          <div className={`${styles.storyProfile}`}>
            <a href="#">
              <img alt="story profile image" src="/images/freeImage.png" />
            </a>
            <span>dongwu_</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Story;
