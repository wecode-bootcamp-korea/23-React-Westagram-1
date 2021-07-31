import React from 'react';
import { withRouter } from 'react-router-dom';
import InputBox from './InputBox/InputBox';
import './InputContainer.scss';
import Andline from './Andline/Andline';
import Button from './Button/Button';

class InputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  changeState = e => {
    const { name, value } = e.target;
    if (name === 'username') {
      this.setState({ username: value });
    } else if (name === 'password') {
      this.setState({ password: value });
    }
  };
  goToSignup = () => {
    this.props.history.push('./signup-jungmin');
  };

  goToMain = e => {
    e.preventDefault();
    // fetch('http://10.58.6.132:8000/users/signin', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: this.state.username,
    //     password: this.state.password,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     console.log(result.token);
    //     if (result.token) {
    //       localStorage.setItem('token', result.token);
    //       this.props.history.push('/main-jungmin');

    //       //   this.props.history.push('/main-jungmin', result);
    //       // } else {
    //       //   alert('이메일과 비밀번호를 확인해주세요 !');
    //     }
    //  this.props.history.push('/main-jungmin', result);
    // });
    this.props.history.push('/main-jungmin', this.state);
  };

  render() {
    const { username, password } = this.state;
    let logindisable = username.indexOf('@') === -1 || password.length < 5;

    return (
      <div className="inputContainer">
        <InputBox
          name="username"
          type="text"
          placeholder="사용자 이메일"
          goTo={logindisable || this.goToMain}
          onchange={this.changeState}
        />
        <InputBox
          name="password"
          type="password"
          goTo={logindisable || this.goToMain}
          onchange={this.changeState}
          placeholder="비밀번호"
        />
        <Andline />
        <Button
          className={
            !logindisable
              ? 'loginButton loginButtonOn'
              : 'loginButton loginButtonOff '
          }
          buttonName="로그인"
          goTo={this.goToMain}
          disabled={logindisable}
        />
        <Button
          className="loginButton loginButtonOn"
          buttonName="회원가입 하기"
          goTo={this.goToSignup}
        />
      </div>
    );
  }
}
//
export default withRouter(InputContainer);
