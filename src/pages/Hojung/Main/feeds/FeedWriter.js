import React from 'react';
import { Link } from 'react-router-dom';

class FeedWriter extends React.Component {
  render() {
    const { writer } = this.props;
    return (
      <div className="writer">
        <Link className="writerInfo">
          <div className="writerImg">
            <img alt="프로필 이미지" src="/images/Hojung/profile_img.jpeg" />
          </div>
          <div className="writerId">{writer}</div>
        </Link>
        <Link className="writerOtherMenu">
          <img
            alt="게시글에 대한 다른메뉴 보기"
            src="/images/Hojung/feed_writer_other_menu.png"
          />
        </Link>
      </div>
    );
  }
}

export default FeedWriter;
