import React from 'react';

import styles from './LoginInput.module.scss';

class LoginInputTemplate extends React.Component {
  loginValidation = () => {
    const { loginId, loginPw, toggleBtnDisabled } = this.props;
    const isFormValid = loginId.includes(`@`) && loginPw.length > 8;

    toggleBtnDisabled(isFormValid);
  };

  render() {
    const { loginValidation } = this;
    const { setLoginInfo, labelId, inputType, placeholder } = this.props;
    return (
      <div className={`${styles.loginBlockLabel}`}>
        <label id={labelId}>
          <input
            type={inputType}
            placeholder={placeholder}
            onChange={event => {
              loginValidation();
              setLoginInfo(labelId, event.target.value);
            }}
          />
        </label>
      </div>
    );
  }
}

class LoginInput extends React.Component {
  render() {
    const { loginId, loginPw, toggleBtnDisabled, setLoginInfo } = this.props;
    return (
      <>
        <LoginInputTemplate
          loginId={loginId}
          loginPw={loginPw}
          setLoginInfo={setLoginInfo}
          toggleBtnDisabled={toggleBtnDisabled}
          labelId="loginId"
          inputType="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <LoginInputTemplate
          loginId={loginId}
          loginPw={loginPw}
          setLoginInfo={setLoginInfo}
          toggleBtnDisabled={toggleBtnDisabled}
          labelId="loginPw"
          inputType="password"
          placeholder="비밀번호"
        />
      </>
    );
  }
}

export default LoginInput;
