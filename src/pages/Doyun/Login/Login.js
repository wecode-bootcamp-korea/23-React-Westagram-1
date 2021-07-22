import React from 'react';
import './Login.scss';

class LoginDoyun extends React.Component {
  render() {
    return (
      <div className="login">
        <h1 className="mainLogo">Westargram</h1>
        <input
          className="idInput"
          type="text"
          placeholder="Phone Number, Name or Email"
        />
        <input
          className="passwordInput"
          type="password"
          placeholder="Password"
        />
        <button className="loginButton">log in</button>
        <a href="fds">forgot your password?</a>
      </div>
    );
  }
}

export default LoginDoyun;
