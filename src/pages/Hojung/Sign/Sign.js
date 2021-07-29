import React from 'react';
import { withRouter } from 'react-router-dom';
import './Sign.scss';

class SignHojung extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      pw: '',
      name: '',
      // phone: '',
      btn: false,
    };
  }

  goToMain = e => {
    e.preventDefault();
    fetch('http://10.58.3.149:8000/users/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: this.state.id,
        password: this.state.pw,
        name: this.state.name,
        //phone_number: this.state.phone,
      }),
    })
      .then(response => response.json())
      .then(result => {
        if (result.message === 'SUCCESS') {
          this.props.history.push('/login-hojung');
        }
        console.log('결과: ', result);
      });
    //this.props.history.push('/login-hojung');
  };

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleKeyPress = e => {
    const isValid = this.state.id.length >= 1 && this.state.pw.length >= 8;
    this.setState({
      btn: isValid,
    });
  };

  render() {
    const { handleKeyPress, handleInput, goToMain } = this;
    const { id, pw, btn, name } = this.state;
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
            <input
              type="text"
              className="input"
              value={name}
              onChange={handleInput}
              name="name"
              placeholder="이름"
            />
            {/* <input
              type="text"
              className="input"
              value={phone}
              onChange={handleInput}
              name="phone"
              placeholder="핸드폰"
            /> */}
            <button onClick={goToMain} className={btn ? 'active' : ''}>
              회원가입
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

export default withRouter(SignHojung);
