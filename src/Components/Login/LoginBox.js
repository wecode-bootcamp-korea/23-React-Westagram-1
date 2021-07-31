/*eslint-disable*/

import React from 'react';
import { withRouter } from 'react-router-dom';
import BoxLogin from './LoginBox/BoxLogin.js';
import BtnLogin from './LoginBox/BtnLogin.js';
import './LoginBox.scss';

class LoginBox extends React.Component {
  goToMain = () => {
    const { id, pw, history } = this.props;
    if (id.indexOf('@') !== -1 && pw.length > 5) {
      fetch('http://192.168.29.61:8000/users/login', {
        method: 'POST',
        body: JSON.stringify({
          email: this.state.id,
          password: this.state.pw,
        }),
      })
        .then(response => response.json())
        .then(response => {
          if (response.token) {
            localStorage.setItem('token', response.token);
            history.push('/main-jungwoo');
          } else {
            alert('아이디와 비밀번호를 다시 한 번 확인해 주세요.');
          }
        });
    } else {
      alert('아이디와 비밀번호를 정확히 입력해 주세요.');
    }
  };

  render() {
    const { handleIdInput, handlePwInput, id, pw } = this.props;
    return (
      <div className="loginBox">
        <div>
          <BoxLogin
            handleIdInput={handleIdInput}
            handlePwInput={handlePwInput}
            goToMain={this.goToMain}
          />

          <BtnLogin
            handleIdInput={handleIdInput}
            handlePwInput={handlePwInput}
            id={id}
            pw={pw}
            goToMain={this.goToMain}
          />
          <div className="line">
            <div /> <p>또는</p> <div />
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
    );
  }
}

export default LoginBox;
