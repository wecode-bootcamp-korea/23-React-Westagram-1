import React from 'react';
import styles from './LoginForm.module.scss';
import LoginInput from './LoginInput';

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      loginId: ``,
      loginPw: ``,
      disabled: true,
    };
  }

  setParentState = (key, value) => {
    this.setState({ [key]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push(`/main-dongwu`, this.state);
  };

  render() {
    return (
      <form
        className={`${styles.loginBlockForm}`}
        // action="./main"
        onSubmit={this.handleSubmit}
        action=""
      >
        <div className={`${styles.loginBlockWrap}`}>
          <div className={`${styles.loginBlockFacebook}`}>
            <button>
              <img
                alt="facebook Logo"
                src={
                  process.env.PUBLIC_URL + `/images/Dongwu/Login/facebook.svg`
                }
              />
              Facebook으로 계속하기
            </button>
          </div>
          <div className={`${styles.loginBlockOr}`}>
            <div className={`${styles.lineDiv}`}></div>
            <div className={`${styles.loginBlockOrText}`}>
              <span>또는</span>
            </div>
            <div className={`${styles.lineDiv}`}></div>
          </div>
          <LoginInput state={this.state} setParentState={this.setParentState} />
          <div className={`${styles.loginBlockNewPw}`}>
            <a href="#">비밀번호를 잊으셨나요?</a>
          </div>
          <div className={`${styles.loginBlockButton}`}>
            <button id="loginBtn" disabled={this.state.disabled}>
              로그인
            </button>
          </div>
        </div>
        <div className={`${styles.signUp}`}>
          <span>
            계정이 없으신가요? <a href="#">가입하기</a>
          </span>
        </div>
      </form>
    );
  }
}

export default LoginForm;
