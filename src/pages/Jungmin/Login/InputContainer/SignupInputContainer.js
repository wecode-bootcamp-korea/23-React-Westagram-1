import React from 'react';
import { withRouter } from 'react-router-dom';
import InputBox from './InputBox';
import './InputContainer.scss';

class Button extends React.Component {
  render() {
    return (
      <button
        className={
          !this.props.disabled
            ? 'loginButton loginButtonOn'
            : 'loginButton loginButtonOff '
        }
        disabled={this.props.disabled}
        onClick={this.props.goTo}
      >
        회원가입
      </button>
    );
  }
}

class Andline extends React.Component {
  render() {
    return (
      <div className="andLine">
        <div className="line"></div>
        <div className="and">또는</div>
        <div className="line"></div>
      </div>
    );
  }
}

class SignupInputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      disableId: true,
      disablePw: true,
      disableName: true,
    };
  }

  componentDidMount() {}

  changeState = e => {
    const { name, value } = e.target;
    if (name === 'username') {
      this.setState({ username: value, disableName: value === true });
    } else if (name === 'email') {
      this.setState({ email: value, disableId: value.indexOf('@') === -1 });
    } else if (name === 'password') {
      this.setState({ password: value, disablePw: value.length < 5 });
    }
  };

  goToLogin = () => {
    fetch('http://10.58.3.149:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.email,
        name: this.state.username,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          this.props.history.push('/login-jungmin');
        } else {
          alert(
            '이름과 이메일 형식을 지켜주세요 . 비밀번호는 5글자 이상입니다.'
          );
        }
      });
  };

  render() {
    let logindisable =
      this.state.disableId || this.state.disablePw || this.state.disableName;
    return (
      <div className="inputContainer">
        <InputBox
          name="username"
          type="text"
          placeholder="사용자 이름"
          State={this.state}
          goTo={logindisable || this.goToLogin}
          onchange={this.changeState}
        />
        <InputBox
          name="email"
          type="text"
          placeholder="이메일"
          State={this.state}
          goTo={logindisable || this.goToLogin}
          onchange={this.changeState}
        />
        <InputBox
          name="password"
          type="password"
          goTo={logindisable || this.goToLogin}
          onchange={this.changeState}
          placeholder="비밀번호"
          State={this.state}
        />

        <Andline />
        <Button goTo={this.ggoToLogin} disabled={logindisable} />
      </div>
    );
  }
}
//
export default withRouter(SignupInputContainer);
