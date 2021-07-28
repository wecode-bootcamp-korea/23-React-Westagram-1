import React from 'react';
import { withRouter } from 'react-router-dom';
import './InputContainer.scss';

class Button extends React.Component {
  render() {
    return (
      <button
        className={
          !this.props.disabled
            ? 'loginButton loginButtonOn'
            : 'loginButton loginButtonOff '
        }
        disabled={this.props.disabled}
        onClick={this.props.goToMain}
      >
        로그인
      </button>
    );
  }
}

class Andline extends React.Component {
  render() {
    return (
      <div className="andLine">
        <div className="line"></div>
        <div className="and">또는</div>
        <div className="line"></div>
      </div>
    );
  }
}

class InputBox extends React.Component {
  render() {
    return (
      <form className="inputBox">
        <input
          className="login"
          name={this.props.name}
          type={this.props.type}
          id={this.props.id}
          placeholder={this.props.placeholder}
          onChange={this.props.onchange}
          onKeyPress={e => {
            if (e.key === 'Enter') this.props.goToMain();
          }}
          state={this.props.State}
        />
      </form>
    );
  }
}
class InputContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      disableId: true,
      disablePw: true,
    };
  }

  componentDidMount() {}

  changeState = e => {
    const { name, value } = e.target;
    if (name === 'username') {
      this.setState({ username: value, disableId: value.indexOf('@') === -1 });
    } else if (name === 'password') {
      this.setState({ password: value, disablePw: value.length < 5 });
    }
  };

  goToMain = () => {
    // fetch('http://10.58.0.158:8000/users/signin', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email: this.state.username,
    //     password: this.state.password,
    //   }),
    // })
    //   .then(response => response.json())
    //   .then(result => {
    //     if (result.token) {
    //       localStorage.setItem('token', result.token);
    //       this.props.history.push('/main-jungmin', this.state);
    //     } else {
    //       alert('다시 입력해주세요');
    //     }
    //     console.log('결과: ', result);
    //   });
    this.props.history.push('/main-jungmin', this.state);
  };

  render() {
    let logindisable = this.state.disableId || this.state.disablePw;
    return (
      <div className="inputContainer">
        <InputBox
          name="username"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          State={this.state}
          goToMain={logindisable || this.goToMain}
          onchange={this.changeState}
        />
        <InputBox
          name="password"
          type="password"
          goToMain={logindisable || this.goToMain}
          onchange={this.changeState}
          placeholder="비밀번호"
          State={this.state}
        />
        <Andline />
        <Button goToMain={this.goToMain} disabled={logindisable} />
        <botton className="forgetPw">비밀번호를 잊으셨나요?</botton>
      </div>
    );
  }
}
//
export default withRouter(InputContainer);
