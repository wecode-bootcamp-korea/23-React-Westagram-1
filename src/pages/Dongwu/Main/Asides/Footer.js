import React from 'react';
import styles from './Footer.module.scss';

class Footer extends React.Component {
  setListInfo = () => {
    let list = [];
    let listInfo = {};
    const listText = [
      `소개`,
      `블로그`,
      `채용 정보`,
      `도움말`,
      `API`,
      `개인정보처리방침`,
      `약관`,
      `인기 계정`,
      `해시태그`,
      `위치`,
    ];

    listText.forEach((elem, idx) => {
      listInfo = { id: idx + 1, href: `#`, text: elem };
      list.push(listInfo);
    });

    return list;
  };

  render() {
    const listInfo = this.setListInfo();

    const list = listInfo.map(elem => {
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
