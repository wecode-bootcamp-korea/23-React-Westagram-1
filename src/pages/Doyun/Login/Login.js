import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class LoginDoyun extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
  }

  handleIdInput = e => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePasswordInput = e => {
    this.setState({
      password: e.target.value,
    });
  };

  handleLogin = () => {
    fetch('http://10.58.3.21:8000/userssignup', {
      method: 'Post',
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.TOKEN) {
          window.location.href = 'http://localhost:3000/main-doyun';
          localStorage.setItem('TOKEN', result.TOKEN);
        }
        return null;
      });
  };

  render() {
    const { handleIdInput, handlePasswordInput, handleLogin } = this;
    return (
      <div className="login">
        <h1 className="mainLogo">Westargram</h1>
        <input
          className="idInput"
          type="text"
          placeholder="Phone Number, Name or Email"
          onChange={handleIdInput}
        />
        <input
          className="passwordInput"
          type="password"
          placeholder="Password"
          onChange={handlePasswordInput}
        />
        <button
          className={
            this.state.email.indexOf('@') !== -1 &&
            this.state.password.length >= 5
              ? 'active'
              : ''
          }
          onClick={handleLogin}
        >
          log in
        </button>
        <Link to="/">forgot your password?</Link>
      </div>
    );
  }
}

export default LoginDoyun;
