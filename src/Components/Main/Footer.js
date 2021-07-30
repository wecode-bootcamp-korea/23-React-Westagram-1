import React from 'react';
import { withRouter } from 'react-router-dom';
import './Footer.scss';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      footerList: [
        '소개',
        '도움말',
        '홍보 센터',
        'API',
        '채용 정보',
        '개인정보처리방침',
        '약관',
        '위치',
        '인기 계정',
        '해시 태그',
        '언어',
      ],
    };
  }

  render() {
    const { footerList } = this.state;
    return (
      <footer className="footerContainer">
        <div className="footerBox">
          <div className="footerBoxTop">
            <ul>
              {footerList.map(event => (
                <li>{event}</li>
              ))}
            </ul>
          </div>

          <div className="footerBoxBtm">
            <ul>
              <li>© 2021 INSTAGRAM FROM FACEBOOK</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;