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

    //   loginId.includes(`@`) && loginPw.length > 8
    //     ? fetch(`http://10.58.0.190:8000/users/signin`, {
    //         method: 'POST',
    //         body: JSON.stringify({
    //           email: this.state.loginId,
    //           password: this.state.loginPw,
    //         }),
    //       })
    //         .then(res => res.json())
    //         .then(data => {
    //           console.log('data:>>>>>>', data);
    //           !data.TOKEN
    //             ? alert('입력을 확인해주세요')
    //             : history.push(`/main-dongwu`, this.state);
    //         })
    //     : alert('입력을 확인해주세요');
  };

  // signUp = () => {
  //   const { loginId, loginPw } = this.state;
  //   loginId.includes(`@`) && loginPw.length > 8
  //     ? fetch(`http://10.58.0.190:8000/users/signup`, {
  //         method: 'POST',
  //         body: JSON.stringify({
  //           email: this.state.loginId,
  //           password: this.state.loginPw,
  //           name: `a`,
  //           phone_number: `010`,
  //           age: 0,
  //           nickname: `dongwu22`,
  //         }),
  //       })
  //         .then(res => res.json())
  //         .then(data => {
  //           console.log('data:>>>>>>', data);
  //         })
  //     : alert('입력을 확인해주세요');
  // };

  render() {
    const { handleSubmit, setParentState } = this;
    const { disabled } = this.state;
    return (
      <>
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
        </form>
        <div className={`${styles.signUp}`}>
          <span>
            계정이 없으신가요?
            <Link to="/login-dongwu">가입하기</Link>
          </span>
          {/* <button onClick={signUp}>가입하기</button> */}
        </div>
      </>
    );
  }
}

export default withRouter(LoginForm);
