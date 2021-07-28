import React from 'react';
import { Link } from 'react-router-dom';
import FOOTER_LIST from './FooterList';
import styles from './Footer.module.scss';
class Footer extends React.Component {
  render() {
    const { userInfo } = this.props;
    const list = FOOTER_LIST.map(elem => {
      return (
        <li key={elem.id}>
          <Link to={{ pathname: '/main-dongwu', state: { loginId: userInfo } }}>
            {elem.text}
          </Link>
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
