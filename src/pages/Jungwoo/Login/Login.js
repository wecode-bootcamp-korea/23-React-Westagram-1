/*eslint-disable*/

import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class BoxLogin extends React.Component {
  render(props) {
    return (
      <div className="boxLogin">
        <input
          type="text"
          id="box"
          className="boxProperty"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={this.props.handleIdInput}
        />
      </div>
    );
  }
}

class BoxPw extends React.Component {
  render(props) {
    return (
      <div className="boxPw">
        <input
          type="text"
          id="box2"
          className="boxProperty"
          placeholder="비밀번호"
          onChange={this.props.handlePwInput}
        />
      </div>
    );
  }
}

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
      ? this.props.history.push('/main-jungwoo')
      : alert('아이디와 패스워드를 바르게 입력해 주세요.');
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
                  <form>
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
                  </form>
                </div>
              </div>

              <div className="signUp">
                <p>
                  계정이 없으신가요? <a>가입하기</a>
                </p>
              </div>
            </div>
          </div>

          <footer className="footerContainer">
            <div className="footerBox">
              <div>
                <ul>
                  <li>소개</li>
                  <li>블로그</li>
                  <li>채용 정보</li>
                  <li>도움말</li>
                  <li>API</li>
                  <li>개인정보처리방침</li>
                  <li>약관</li>
                  <li>인기 계정</li>
                  <li>해시 태그</li>
                  <li>위치</li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>한국어</li>
                  <li>© 2021 Instagram from Facebook</li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </>
    );
  }
}

export default withRouter(LoginJungwoo);
