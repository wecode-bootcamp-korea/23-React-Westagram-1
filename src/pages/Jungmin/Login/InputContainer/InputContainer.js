import React from 'react';
import { withRouter } from 'react-router-dom';
import InputBox from './InputBox';
import './InputContainer.scss';

class Button extends React.Component {
  render() {
    return (
      <>
        <button
          className={
            !this.props.disabled
              ? 'loginButton loginButtonOn'
              : 'loginButton loginButtonOff '
          }
          disabled={this.props.disabled}
          onClick={this.props.goToMain}
        >
          로그인
        </button>
        <button onClick={this.props.goToSignup} className="forgetPw">
          회원가입하기
        </button>
      </>
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

class InputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      disableId: true,
      disablePw: true,
    };
  }

  componentDidMount() {}

  changeState = e => {
    const { name, value } = e.target;
    if (name === 'username') {
      this.setState({ username: value, disableId: value.indexOf('@') === -1 });
    } else if (name === 'password') {
      this.setState({ password: value, disablePw: value.length < 5 });
    }
  };
  goToSignup = () => {
    this.props.history.push('./signup-jungmin');
  };

  goToMain = () => {
    fetch('http://10.58.6.61:8000/users/signin', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.username,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.access_token) {
          localStorage.setItem('token', result.access_token);
          this.props.history.push('/main-jungmin', result);
        } else {
          alert('이메일과 비밀번호를 확인해주세요 !');
        }
      });
    this.props.history.push('/main-jungmin', this.state);
  };

  render() {
    let logindisable = this.state.disableId || this.state.disablePw;
    return (
      <div className="inputContainer">
        <InputBox
          name="username"
          type="text"
          placeholder="사용자 이메일"
          State={this.state}
          goTo={logindisable || this.goToMain}
          onchange={this.changeState}
        />
        <InputBox
          name="password"
          type="password"
          goTo={logindisable || this.goToMain}
          onchange={this.changeState}
          placeholder="비밀번호"
          State={this.state}
        />
        <Andline />
        <Button
          goToSignup={this.goToSignup}
          goToMain={this.goToMain}
          disabled={logindisable}
        />
      </div>
    );
  }
}
//
export default withRouter(InputContainer);
