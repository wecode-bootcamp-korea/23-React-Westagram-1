import React from 'react';
import styles from './LoginInput.module.scss';

class LoginInput extends React.Component {
  loginValidation = () => {
    const { state, setParentState } = this.props;
    state[`loginId`].includes(`@`) && state[`loginPw`].length > 8
      ? setParentState(`disabled`, false)
      : setParentState(`disabled`, true);
  };

  renderInput = (labelId, inputId, inputType, placeholder) => {
    const { loginValidation } = this;
    const { setParentState } = this.props;
    return (
      <div className={`${styles.loginBlockLabel}`}>
        <label id={labelId}>
          <input
            id={inputId}
            type={inputType}
            placeholder={placeholder}
            onChange={event => {
              loginValidation();
              setParentState(labelId, event.target.value);
            }}
          />
        </label>
      </div>
    );
  };

  render() {
    const { renderInput } = this;
    return (
      <>
        {renderInput(
          `loginId`,
          `loginIdInput`,
          `text`,
          `전화번호, 사용자 이름 또는 이메일`
        )}
        {renderInput(`loginPw`, `loginPwInput`, `password`, `비밀번호`)}
      </>
    );
  }
}

export default LoginInput;
