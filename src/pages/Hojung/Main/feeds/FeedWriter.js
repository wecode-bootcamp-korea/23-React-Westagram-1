import React from 'react';

class FeedWriter extends React.Component {
  render() {
    return (
      <div className="writer">
        <a href="/" className="writerInfo">
          <div className="writerImg">
            <img alt="프로필 이미지" src="/images/Hojung/profile_img.jpeg" />
          </div>
          <div className="writerId">{this.props.writer}</div>
        </a>
        <a href="/" className="writerOtherMenu">
          <img
            alt="게시글에 대한 다른메뉴 보기"
            src="/images/Hojung/feed_writer_other_menu.png"
          />
        </a>
      </div>
    );
  }
}

export default FeedWriter;
