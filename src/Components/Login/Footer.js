import React from 'react';
import { withRouter } from 'react-router-dom';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footerContainer">
        <div className="footerBox">
          <div>
            <ul>
              <li>소개</li>
              <li>블로그</li>
              <li>채용 정보</li>
              <li>도움말</li>
              <li>API</li>
              <li>개인정보처리방침</li>
              <li>약관</li>
              <li>인기 계정</li>
              <li>해시 태그</li>
              <li>위치</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>한국어</li>
              <li>© 2021 Instagram from Facebook</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
