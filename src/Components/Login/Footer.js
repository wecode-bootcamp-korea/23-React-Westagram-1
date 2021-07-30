import React from 'react';
import { withRouter } from 'react-router-dom';
import './Footer.scss';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      footerList: [
        '소개',
        '블로그',
        '채용 정보',
        '도움말',
        'API',
        '개인정보처리방침',
        '약관',
        '인기 계정',
        '해시 태그',
        '위치',
      ],
    };
  }

  render() {
    const { footerList } = this.state;
    return (
      <footer className="footerContainer">
        <div className="footerBox">
          <div>
            <ul>
              {footerList.map(e => (
                <li>{e}</li>
              ))}
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
