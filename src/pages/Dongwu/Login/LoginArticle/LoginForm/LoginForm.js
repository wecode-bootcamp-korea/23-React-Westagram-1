import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import LoginInput from './LoginInput/LoginInput';
import styles from './LoginForm.module.scss';

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
    const { loginId, loginPw } = this.state;
    const { history } = this.props;
    e.preventDefault();
    loginId.includes(`@`) && loginPw.length > 8
      ? history.push(`/main-dongwu`, this.state)
      : alert('ID, Password를 확인하세요.');
  };

  render() {
    const { handleSubmit, setParentState } = this;
    const { disabled } = this.state;
    return (
      <form
        className={`${styles.loginBlockForm}`}
        onSubmit={handleSubmit}
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
          <LoginInput state={this.state} setParentState={setParentState} />
          <div className={`${styles.loginBlockNewPw}`}>
            <Link to="/login-dongwu">비밀번호를 잊으셨나요?</Link>
          </div>
          <div className={`${styles.loginBlockButton}`}>
            <button id="loginBtn" disabled={disabled}>
              로그인
            </button>
          </div>
        </div>
        <div className={`${styles.signUp}`}>
          <span>
            계정이 없으신가요? <Link to="/login-dongwu">가입하기</Link>
          </span>
        </div>
      </form>
    );
  }
}

export default withRouter(LoginForm);
