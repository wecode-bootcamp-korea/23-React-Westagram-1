import React from 'react';
import { withRouter, Link } from 'react-router-dom';
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

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleKeyPress = e => {
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
              onChange={this.handleInput}
              name="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              type="password"
              className="input pwdInput"
              value={this.state.pw}
              onChange={this.handleInput}
              name="pw"
              placeholder="비밀번호"
            />
            <Link
              to={{
                state: {
                  id: this.state.id,
                },
              }}
            >
              <button
                onClick={this.goToMain}
                className={this.state.btn ? 'active' : ''}
                disabled={!this.state.btn ? true : false}
              >
                로그인
              </button>
            </Link>
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
