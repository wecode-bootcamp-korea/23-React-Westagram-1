import React from 'react';
import LoginArticle from './LoginArticle/LoginArticle';
import LoginFooter from './LoginFooter/LoginFooter';
import styles from './Login.module.scss';
class LoginDongwu extends React.Component {
  render() {
    return (
      <>
        <div className={`${styles.space}`}></div>
        <section className={`${styles.loginSection}`}>
          <main className={`${styles.loginMain}`}>
            {/* <LoginNav /> */}
            <LoginArticle />
            <div className={`${styles.facebookLogo}`}>
              <span>from</span>
              <span>FACEBOOK</span>
            </div>
          </main>
        </section>
        <LoginFooter />
      </>
    );
  }
}

export default LoginDongwu;
