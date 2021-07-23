import React from 'react';
import './Login.scss';

class LoginDoyun extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      password: '',
    };
  }

  handleIdInput = e => {
    console.log(e.target.value);
    this.setState({
      id: e.target.value,
    });
  };

  handlePasswordInput = e => {
    console.log(e.target.value);
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    console.log(this.state);
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
        <button className="loginButton">log in</button>
        <a href="fds">forgot your password?</a>
      </div>
    );
  }
}

export default LoginDoyun;
