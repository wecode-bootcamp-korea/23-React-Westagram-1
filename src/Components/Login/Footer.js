import React from 'react';
import { withRouter } from 'react-router-dom';
import './Footer.scss';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {
      footerLogin: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/Jungwoo/footerLogin.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          footerLogin: data,
        });
      });
  }

  render() {
    const { footerLogin } = this.state;
    return (
      <footer className="footerLoginContainer">
        <div className="footerLogin">
          <div>
            <ul>
              {footerLogin.map(el => (
                <li>{el.list}</li>
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
