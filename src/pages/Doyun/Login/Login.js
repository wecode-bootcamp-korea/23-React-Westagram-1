import React from 'react';
import { Link } from 'react-router-dom';
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
    const { handleIdInput, handlePasswordInput } = this;
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
            this.state.id.indexOf('@') !== -1 && this.state.password.length >= 5
              ? 'active'
              : ''
          }
        >
          log in
        </button>
        <Link to="/">forgot your password?</Link>
      </div>
    );
  }
}

export default LoginDoyun;
