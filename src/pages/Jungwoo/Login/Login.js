/*eslint-disable*/

import React from 'react';
import { withRouter } from 'react-router-dom';
import BoxLogin from '../../../Components/Login/BoxLogin.js';
import BoxPw from '../../../Components/Login/BoxPw.js';
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

  goToMain = () => {
    this.state.idInputValue.indexOf('@') !== -1 &&
    this.state.pwInputValue.length > 5
      ? fetch('http://192.168.29.61:8000/users/login', {
          method: 'POST',
          body: JSON.stringify({
            email: this.state.idInputValue,
            password: this.state.pwInputValue,
          }),
        })
          .then(response => response.json())
          .then(response => {
            if (response.token) {
              localStorage.setItem('token', response.token);
              this.props.history.push('/main-jungwoo');
            } else {
              alert('아이디와 비밀번호를 다시 한 번 확인해 주세요.');
            }
          })
      : alert('아이디와 비밀번호를 정확히 입력해 주세요.');
  };

  signUp = () => {
    this.state.idInputValue.indexOf('@') !== -1 &&
    this.state.pwInputValue.length > 5
      ? fetch('http://192.168.29.61:8000/users/signup', {
          method: 'POST',
          body: JSON.stringify({
            email: this.state.idInputValue,
            password: this.state.pwInputValue,
          }),
        })
          .then(response => response.json())
          .then(result => {
            console.log('결과: ', result);
          })
      : alert('아이디와 비밀번호를 정확히 입력해 주세요.');
  };

  handleIdInput = event => {
    this.setState({
      idInputValue: `${event.target.value}`,
    });
  };

  handlePwInput = event => {
    this.setState({
      pwInputValue: `${event.target.value}`,
    });
  };

  /*goToMain = props => {
    this.props.history.push('/main-jungwoo');
  }; */

  render() {
    return (
      <>
        <div className="container">
          <div className="mainBox">
            <div>
              <div className="mainBoxContainer">
                <h1>Instagram</h1>
                <div className="loginBox">
                  <div>
                    <BoxLogin handleIdInput={this.handleIdInput} />
                    <BoxPw handlePwInput={this.handlePwInput} />

                    <div className="btnLogin">
                      <button
                        className={
                          this.state.idInputValue.indexOf('@') !== -1 &&
                          this.state.pwInputValue.length > 5
                            ? 'changeButtonColor'
                            : 'btnProperty'
                        }
                        onClick={this.goToMain}
                      >
                        로그인
                      </button>
                    </div>
                    <div className="line">
                      <div></div>
                      <p>또는</p>
                      <div></div>
                    </div>
                    <div className="faceBookLogin">
                      <h6>
                        <img src="../../../images/Jungwoo/facebook.png" />
                        Facebook으로 로그인
                      </h6>
                    </div>
                    <a className="rememberPw">비밀번호를 잊으셨나요?</a>
                  </div>
                </div>
              </div>

              <div className="signUp">
                <p>
                  계정이 없으신가요? <a onClick={this.signUp}>가입하기</a>
                </p>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </>
    );
  }
}

export default withRouter(LoginJungwoo);
