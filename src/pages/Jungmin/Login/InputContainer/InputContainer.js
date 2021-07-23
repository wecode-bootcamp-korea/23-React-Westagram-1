import React from 'react';
import { withRouter } from 'react-router-dom';
import './InputContainer.scss';

class Button extends React.Component {
  render() {
    return (
      <button className="loginButton" onClick={this.props.goToMain}>
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
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.props.onchange(name, value);
  }

  render() {
    return (
      <form className="inputBox">
        <input
          className="login"
          name={this.props.name}
          type={this.props.type}
          id={this.props.id}
          placeholder={this.props.placeholder}
          onChange={this.handleChange}
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
    };
  }
  changeState = (name, value) => {
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };
  goToMain = () => {
    this.props.history.push('/main-jungmin');
  };

  render() {
    return (
      <div className="inputContainer">
        <InputBox
          name="username"
          type="text"
          value={this.state.username}
          onchange={this.changeState}
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <InputBox
          name="password"
          type="password"
          onchange={this.changeState}
          value={this.state.pw}
          placeholder="비밀번호"
        />
        <Andline />
        <Button goToMain={this.goToMain} />
        <p className="forgetPw">비밀번호를 잊으셨나요?</p>
      </div>
    );
  }
}

export default withRouter(InputContainer);
