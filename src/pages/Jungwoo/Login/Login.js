/*eslint-disable*/

import React from 'react';
import { withRouter } from 'react-router-dom';
import LoginBox from '../../../Components/Login/LoginBox.js';
import SignUp from '../../../Components/Login/SignUp.js';
import Footer from '../../../Components/Login/Footer.js';
import './Login.scss';

class LoginJungwoo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idInputValue: '',
      pwInputValue: '',
    };
  }

  handleIdInput = event => {
    const { value } = event.target;
    this.setState({
      idInputValue: value, //event.target.value
    });
  };

  handlePwInput = event => {
    const { value } = event.target;
    this.setState({
      pwInputValue: value,
    });
  };

  render() {
    const { handleIdInput, handlePwInput } = this;
    const { idInputValue, pwInputValue } = this.state;
    return (
      <>
        <div className="container">
          <div className="mainBox">
            <div>
              <div className="mainBoxContainer">
                <h1>Instagram</h1>
                <LoginBox
                  handleIdInput={handleIdInput}
                  handlePwInput={handlePwInput}
                  idInputValue={idInputValue}
                  pwInputValue={pwInputValue}
                />
              </div>
              <SignUp
                handleIdInput={handleIdInput}
                handlePwInput={handlePwInput}
                idInputValue={idInputValue}
                pwInputValue={pwInputValue}
              />
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default withRouter(LoginJungwoo);
