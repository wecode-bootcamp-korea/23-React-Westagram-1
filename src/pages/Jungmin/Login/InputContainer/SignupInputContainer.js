import React from 'react';
import { withRouter } from 'react-router-dom';
import InputBox from './InputBox/InputBox';
import Andline from './Andline/Andline';
import Button from './Button/Button';
import './InputContainer.scss';

class SignupInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
    };
  }

  changeState = e => {
    const { name, value } = e.target;
    if (name === 'username') {
      this.setState({ username: value });
    } else if (name === 'email') {
      this.setState({ email: value });
    } else if (name === 'password') {
      this.setState({ password: value });
    }
  };

  goToLogin = e => {
    e.preventDefault();
    // fetch('http://10.58.6.61:8000/users/signup', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: this.state.email,
    //     name: this.state.username,
    //     password: this.state.password,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     if (result.message === 'SUCCESS') {
    //       this.props.history.push('/login-jungmin');
    //     } else {
    //       alert(
    //         '이름과 이메일 형식을 지켜주세요 . 비밀번호는 5글자 이상입니다.'
    //       );
    //     }
    //   });

    alert('축하합니다');
    this.props.history.push('/login-jungmin');
  };

  render() {
    const { username, email, password } = this.state;
    let signupDisable =
      username === true || email.indexOf('@') === -1 || password.length < 5;
    return (
      <div className="inputContainer">
        <InputBox
          name="username"
          type="text"
          placeholder="사용자 이름"
          State={this.state}
          goTo={signupDisable || this.goToLogin}
          onchange={this.changeState}
        />
        <InputBox
          name="email"
          type="text"
          placeholder="이메일"
          State={this.state}
          goTo={signupDisable || this.goToLogin}
          onchange={this.changeState}
        />
        <InputBox
          name="password"
          type="password"
          goTo={signupDisable || this.goToLogin}
          onchange={this.changeState}
          placeholder="비밀번호"
          State={this.state}
        />

        <Andline />
        <Button
          className={
            !signupDisable
              ? 'loginButton loginButtonOn'
              : 'loginButton loginButtonOff '
          }
          buttonName="회원가입하기"
          goTo={this.goToLogin}
          disabled={signupDisable}
        />
      </div>
    );
  }
}
//
export default withRouter(SignupInputContainer);
