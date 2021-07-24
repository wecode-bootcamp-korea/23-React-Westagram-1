import React from 'react';

class FeedImgs extends React.Component {
  render() {
    return (
      <div className="imgs">
        <img alt="피드 이미지" src={this.props.imgs} />
      </div>
    );
  }
}

export default FeedImgs;
