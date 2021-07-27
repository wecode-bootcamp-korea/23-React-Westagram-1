import React from 'react';
import styles from './LoginFooter.module.scss';
import FOOTER_LIST from './LoginFooterList';

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
