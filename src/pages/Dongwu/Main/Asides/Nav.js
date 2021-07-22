import React from 'react';
import styles from './Nav.module.scss';

class Modal extends React.Component {
  render() {
    return (
      <nav className={`${styles.searchModal} ${styles.hidden}`}>
        <li className={`${styles.lastSearchList}`}>
          <div>
            <span>최근 검색 항목</span>
          </div>
          <div>
            <span>지우기</span>
          </div>
        </li>
        <li className={`${styles.searchList}`}>
          <img
            alt="search-profile"
            src={process.env.PUBLIC_URL + `/images/Dongwu/Main/freeImage.png`}
          />
          <div className={`${styles.searchListProfile}`}>
            <span>steam_udon</span>
            <span>난 그런거 몰러유</span>
          </div>
          <div className={`${styles.searchListIcon}`}>
            <i className="fas fa-times"></i>
          </div>
        </li>
      </nav>
    );
  }
}

class SearchBar extends React.Component {
  moveTextLeft = () => {};

  render() {
    return (
      <div className={`${styles.headerSearch}`}>
        <label htmlFor="search">
          <span>
            <i className="fas fa-search"></i>검색
          </span>
          <input type="text" onClick={this.moveTextLeft} />
        </label>
      </div>
    );
  }
}

class Nav extends React.Component {
  render() {
    return (
      <>
        <nav className={`${styles.header}`}>
          <div className={`${styles.headerContainer}`}>
            <div className={`${styles.headerWrap}`}>
              <div className={`${styles.headerLogo}`}>
                <a href="#">Westagram</a>
              </div>
              <SearchBar />
              <div className={`${styles.headerIcons}`}>
                <img
                  alt="우측 메뉴 탐색"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                />
                <img
                  alt="하트"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
                />
                <img
                  alt="마이페이지"
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                />
              </div>
            </div>
          </div>
        </nav>
        <Modal />
      </>
    );
  }
}

export default Nav;
