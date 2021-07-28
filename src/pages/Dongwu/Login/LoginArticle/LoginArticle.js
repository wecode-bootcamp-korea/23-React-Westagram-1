import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import styles from './LoginArticle.module.scss';

class LoginArticle extends React.Component {
  render() {
    return (
      <article className={`${styles.login}`}>
        <div className={`${styles.loginContainer}`}>
          <div className={`${styles.loginBlock}`}>
            <h1 className={`${styles.logo}`}>Westagram</h1>
            <LoginForm />
          </div>
        </div>
      </article>
    );
  }
}

export default LoginArticle;
