import React from 'react';
import FOOTER_LIST from './LoginFooterList';

import styles from './LoginFooter.module.scss';

class LoginFooter extends React.Component {
  render() {
    const list = FOOTER_LIST.map(elem => {
      return (
        <li key={elem.id}>
          <a href={elem.href}>{elem.text}</a>
        </li>
      );
    });
    return (
      <footer>
        <nav className={`${styles.loginFooterWrap}`}>
          <div className={`${styles.loginFooterDesc}`}>{list}</div>
        </nav>
      </footer>
    );
  }
}

export default LoginFooter;
