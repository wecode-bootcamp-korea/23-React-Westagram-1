// 아래 코드는 추후 사용될 수 있으니 주석처리하도록 하겠습니다. - 기존 Login 전용 nav
// import { Link } from "react-router-dom";

// class LoginNav extends React.Component {
//   render() {
//     return (
//       <nav className={`${styles.loginHeader}`}>
//         <div className={`${styles.headerContainer}`}>
//           <span>한국어</span>
//           <i className="fas fa-chevron-down"></i>
//         </div>
//       </nav>
//     );
//   }
// }

import React from 'react';
import styles from './Login.module.scss';
import { withRouter } from 'react-router-dom';
import LoginArticle from './LoginArticle';
import LoginFooter from './LoginFooter';
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
