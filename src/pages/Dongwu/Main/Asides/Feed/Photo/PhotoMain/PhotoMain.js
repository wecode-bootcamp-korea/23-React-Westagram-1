import React from 'react';

import styles from './PhotoMain.module.scss';

class PhotoMain extends React.Component {
  render() {
    const { feedImg } = this.props;
    return (
      <div className={`${styles.photoMain}`}>
        <img alt="main img" src={feedImg} />
      </div>
    );
  }
}

export default PhotoMain;