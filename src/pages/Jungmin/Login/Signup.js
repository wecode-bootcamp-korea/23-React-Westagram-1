import React from 'react';
import SignupInputContainer from './InputContainer/SignupInputContainer';

import './Login.scss';

class SignupJungmin extends React.Component {
  render() {
    return (
      <>
        <div className="loginMain">
          <div className="loginContainer">
            <h1 className="logo">westagram</h1>
            <SignupInputContainer />
          </div>
        </div>
      </>
    );
  }
}

export default SignupJungmin;
