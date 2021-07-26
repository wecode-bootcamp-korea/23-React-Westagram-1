import React from 'react';
import { withRouter } from 'react-router-dom';
import './InputContainer.scss';

class Button extends React.Component {
  render() {
    return (
      <button
        className="loginButton"
        disabled={this.props.disabled}
        onClick={this.props.goToMain}
        style={this.props.style}
      >
        로그인
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

class InputBox extends React.Component {
  render() {
    return (
      <form className="inputBox">
        <input
          className="login"
          name={this.props.name}
          type={this.props.type}
          id={this.props.id}
          placeholder={this.props.placeholder}
          onChange={this.props.onchange}
          onKeyPress={e => {
            if (e.key === 'Enter') this.props.goToMain();
          }}
          state={this.props.State}
        />
      </form>
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

  changeState = e => {
    const { name, value } = e.target;
    if (name === 'username') {
      this.setState({ username: value, disableId: value.indexOf('@') === -1 });
    } else if (name === 'password') {
      this.setState({ password: value, disablePw: value.length < 5 });
    }
  };

  goToMain = () => {
    this.props.history.push('/main-jungmin');
  };

  render() {
    return (
      <div className="inputContainer">
        <InputBox
          name="username"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          State={this.state}
          goToMain={
            this.state.disableId || this.state.disablePw || this.goToMain
          }
          onchange={this.changeState}
        />
        <InputBox
          name="password"
          type="password"
          goToMain={
            this.state.disableId || this.state.disablePw || this.goToMain
          }
          onchange={this.changeState}
          placeholder="비밀번호"
          State={this.state}
        />
        <Andline />
        <Button
          goToMain={this.goToMain}
          disabled={this.state.disableId || this.state.disablePw}
          style={
            this.state.disableId || this.state.disablePw
              ? { backgroundColor: 'rgba(var(--d69, 0, 149, 246), 0.3)' }
              : { backgroundColor: 'rgba(var(--d69, 0, 149, 246), 1)' }
          }
        />
        <p className="forgetPw">비밀번호를 잊으셨나요?</p>
      </div>
    );
  }
}
//
export default withRouter(InputContainer);
