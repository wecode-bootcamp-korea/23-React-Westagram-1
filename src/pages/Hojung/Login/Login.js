import React from 'react';
import { withRouter } from 'react-router-dom';
import './Login.scss';

class LoginHojung extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      btn: false,
    };
  }
  goToMain = () => {
    this.props.history.push('/main-hojung');
  };

  handleIdInput = e => {
    this.setState({
      id: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      pw: e.target.value,
    });
  };

  handleKeyPress = () => {
    this.state.id.length >= 1 &&
    this.state.pw.length >= 5 &&
    this.state.id.indexOf('@') > -1
      ? this.setState({ btn: true })
      : this.setState({ btn: false });
  };

  render() {
    return (
      <div id="login">
        <div className="loginWrap">
          <h1 className="sitelogo">Westargram</h1>
          <form action="/Main" onKeyUp={this.handleKeyPress}>
            <input
              type="text"
              className="input idInput"
              value={this.state.id}
              onChange={this.handleIdInput}
              name="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              type="password"
              className="input pwdInput"
              value={this.state.pw}
              onChange={this.handlePwInput}
              name="password"
              placeholder="비밀번호"
            />
            <button
              onClick={this.goToMain}
              className={this.state.btn ? 'active' : ''}
            >
              로그인
            </button>
          </form>
          <a href="/" className="forgetLink">
            비밀번호를 잊으셨나요?
          </a>
        </div>
      </div>
    );
  }
}

export default withRouter(LoginHojung);
