import React from 'react';

class FeedImgs extends React.Component {
  render() {
    const { imgs } = this.props;
    return (
      <div className="imgs">
        <img alt="피드 이미지" src={imgs} />
      </div>
    );
  }
}

export default FeedImgs;
