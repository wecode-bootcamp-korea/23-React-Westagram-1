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

  componentDidMount() {
    const token = localStorage.getItem('token');
    if (token) {
      this.props.history.push('/main-hojung');
    }
  }

  goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.1.207:8000/users/signin', {
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
          this.props.history.push('/main-hojung');
        } else {
          alert('아이디 비밀번호를 다시 입력해주세요!');
        }
      });
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleKeyPress = e => {
    const isValid =
      this.state.id.length >= 1 &&
      this.state.pw.length >= 5 &&
      this.state.id.indexOf('@') > -1;
    this.setState({
      btn: isValid,
    });
  };

  render() {
    const { handleKeyPress, handleInput, goToMain } = this;
    const { id, pw, btn } = this.state;
    return (
      <div id="login">
        <div className="loginWrap">
          <h1 className="sitelogo">Westargram</h1>
          <form action="/Main" onKeyUp={handleKeyPress}>
            <input
              type="text"
              className="input idInput"
              value={id}
              onChange={handleInput}
              name="id"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              type="password"
              className="input pwdInput"
              value={pw}
              onChange={handleInput}
              name="pw"
              placeholder="비밀번호"
            />
            <button
              onClick={goToMain}
              className={btn ? 'active' : ''}
              disabled={!btn ? true : false}
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
