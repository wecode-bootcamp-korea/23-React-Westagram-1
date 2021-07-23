import React from 'react';
import styles from './LoginInput.module.scss';

class LoginInput extends React.Component {
  loginValidation = () => {
    this.props.state[`loginId`].includes(`@`) &&
    this.props.state[`loginPw`].length > 8
      ? this.props.setParentState(`disabled`, false)
      : this.props.setParentState(`disabled`, true);
  };

  renderInput(labelId, inputId, inputType, placeholder) {
    return (
      <div className={`${styles.loginBlockLabel}`}>
        <label id={labelId}>
          <input
            id={inputId}
            type={inputType}
            placeholder={placeholder}
            onChange={event => {
              this.loginValidation();
              this.props.setParentState(labelId, event.target.value);
            }}
          />
        </label>
      </div>
    );
  }

  render() {
    console.log(this.props.state[`loginId`]);
    return (
      <>
        {this.renderInput(
          `loginId`,
          `loginIdInput`,
          `text`,
          `전화번호, 사용자 이름 또는 이메일`
        )}
        {this.renderInput(`loginPw`, `loginPwInput`, `password`, `비밀번호`)}
      </>
    );
  }
}

export default LoginInput;
