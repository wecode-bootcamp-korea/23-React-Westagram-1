import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ul className="footLink">
          <li>
            <a href="/">Instagram 정보</a>
          </li>
          <li>
            <a href="/">지원</a>
          </li>
          <li>
            <a href="/">홍보 센터</a>
          </li>
          <li>
            <a href="/">API</a>
          </li>
          <li>
            <a href="/">채용 정보</a>
          </li>
          <li>
            <a href="/">개인정보처리방침</a>
          </li>
          <li>
            <a href="/">약관</a>
          </li>
          <li>
            <a href="/">디렉터리</a>
          </li>
          <li>
            <a href="/">프로필</a>
          </li>
          <li>
            <a href="/">해시태그</a>
          </li>
          <li>
            <a href="/">언어</a>
          </li>
        </ul>
        <p className="copyRight">© 2021 INSTAGRAM FROM FACEBOOK</p>
      </footer>
    );
  }
}

export default Footer;
