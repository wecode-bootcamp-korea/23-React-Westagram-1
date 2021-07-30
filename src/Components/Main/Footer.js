import React from 'react';
import { withRouter } from 'react-router-dom';
import './Footer.scss';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      footerMain: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/Jungwoo/footerMain.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        this.setState({
          footerMain: data,
        });
      });
  }

  render() {
    const { footerMain } = this.state;
    return (
      <footer className="footerMainContainer">
        <div className="footerMain">
          <ul>
            {footerMain.map(el => {
              return <li key={el.id}>{el.list}</li>;
            })}
          </ul>
          <ul>
            <li>© 2021 INSTAGRAM FROM FACEBOOK</li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;
