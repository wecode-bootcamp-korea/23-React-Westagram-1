import React from 'react';
import styles from './LoginFooter.module.scss';

class LoginFooter extends React.Component {
  render() {
    return (
      <footer>
        <div className={`${styles.loginFooterWrap}`}>
          <div className={`${styles.loginFooterDesc}`}>
            <div>
              <a href="#">소개</a>
            </div>
            <div>
              <a href="#">블로그</a>
            </div>
            <div>
              <a href="#">채용 정보</a>
            </div>
            <div>
              <a href="#">도움말</a>
            </div>
            <div>
              <a href="#">API</a>
            </div>
            <div>
              <a href="#">개인정보처리방침</a>
            </div>
            <div>
              <a href="#">약관</a>
            </div>
            <div>
              <a href="#">인기 계정</a>
            </div>
            <div>
              <a href="#"> 해시태그 </a>
            </div>
            <div>
              <a href="#"> 위치 </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default LoginFooter;
