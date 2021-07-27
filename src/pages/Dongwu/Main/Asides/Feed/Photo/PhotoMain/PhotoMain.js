import React from 'react';
import styles from './PhotoMain.module.scss';

class PhotoMain extends React.Component {
  render() {
    return (
      <div className={`${styles.photoMain}`}>
        <img
          alt="main photo"
          src={process.env.PUBLIC_URL + this.props.feedImg}
        />
      </div>
    );
  }
}

export default PhotoMain;
