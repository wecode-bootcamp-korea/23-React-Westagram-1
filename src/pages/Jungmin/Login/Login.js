import React from 'react';
import InputContainer from './InputContainer/InputContainer';
import './Login.scss';

class LoginJungmin extends React.Component {
  render() {
    return (
      <>
        <div className="loginMain">
          <div className="loginContainer">
            <h1 className="logo">westagram</h1>
            <InputContainer />
          </div>
        </div>
      </>
    );
  }
}

export default LoginJungmin;
