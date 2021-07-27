import React from 'react';
import styles from './Footer.module.scss';
import FOOTER_LIST from './FooterList';
class Footer extends React.Component {
  render() {
    const list = FOOTER_LIST.map(elem => {
      return (
        <li key={elem.id}>
          <a href={elem.href}>{elem.text}</a>
        </li>
      );
    });
    return (
      <div className={`${styles.Footer}`}>
        <nav className={`${styles.footerDesc}`}>{list}</nav>
        <span className={`${styles.fromFacebook}`}>
          © 2021 Instagram from Facebook
        </span>
      </div>
    );
  }
}

export default Footer;
