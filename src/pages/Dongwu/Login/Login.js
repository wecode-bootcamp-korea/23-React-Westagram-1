import React from 'react';
import styles from './Login.module.scss';
import { withRouter } from 'react-router-dom';
import LoginArticle from './LoginArticle/LoginArticle';
import LoginFooter from './LoginFooter/LoginFooter';
class LoginDongwu extends React.Component {
  render() {
    return (
      <>
        <div className={`${styles.space}`}></div>
        <section className={`${styles.loginSection}`}>
          <main className={`${styles.loginMain}`}>
            {/* <LoginNav /> */}
            <LoginArticle history={this.props.history} />
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

export default withRouter(LoginDongwu);
