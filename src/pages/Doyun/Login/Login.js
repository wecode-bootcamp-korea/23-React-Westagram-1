import React from 'react';
import './Login.scss';

class LoginDoyun extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      password: '',
      buttonId: false,
    };
  }

  handleIdInput = e => {
    this.setState({
      id: e.target.value,
    });
  };

  handlePasswordInput = e => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    return (
      <div className="login">
        <h1 className="mainLogo">Westargram</h1>
        <input
          className="idInput"
          type="text"
          placeholder="Phone Number, Name or Email"
          onChange={this.handleIdInput}
        />
        <input
          className="passwordInput"
          type="password"
          placeholder="Password"
          onChange={this.handlePasswordInput}
        />
        <button
          className="loginButton"
          style={
            this.state.id.indexOf('@') !== -1 && this.state.password.length >= 5
              ? { backgroundColor: '#0295F6', cursor: 'pointer' }
              : null
          }
        >
          log in
        </button>
        <a href="/">forgot your password?</a>
      </div>
    );
  }
}

export default LoginDoyun;
