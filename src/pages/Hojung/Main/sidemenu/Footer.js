import React from 'react';
import { INFO } from './FooterData';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <ul className="footLink">
          {INFO.map(el => {
            return (
              <li key={el.id}>
                <a href="/">{el.content}</a>
              </li>
            );
          })}
        </ul>
        <p className="copyRight">© 2021 INSTAGRAM FROM FACEBOOK</p>
      </footer>
    );
  }
}

export default Footer;
