import React from 'react';
import styles from './Footer.module.scss';

class Footer extends React.Component {
  render() {
    return (
      <div className={`${styles.Footer}`}>
        <nav className={`${styles.footerDesc}`}>
          <li>
            <a href="#">소개</a>
          </li>

          <li>
            <a href="#">블로그</a>
          </li>
          <li>
            <a href="#">채용 정보</a>
          </li>
          <li>
            <a href="#">도움말</a>
          </li>
          <li>
            <a href="#">API</a>
          </li>
          <li>
            <a href="#">개인정보처리방침</a>
          </li>
          <li>
            <a href="#">약관</a>
          </li>
          <li>
            <a href="#">인기 계정</a>
          </li>
          <li>
            <a href="#"> 해시태그 </a>
          </li>
          <li>
            <a href="#"> 위치 </a>
          </li>
        </nav>
        <span className={`${styles.fromFacebook}`}>
          © 2021 Instagram from Facebook
        </span>
      </div>
    );
  }
}

export default Footer;
