import React from 'react';
import { withRouter } from 'react-router-dom';
import './SignUp.scss';

class SignUp extends React.Component {
  signUp = props => {
    const { idInputValue, pwInputValue } = this.props;
    idInputValue.indexOf('@') !== -1 && pwInputValue.length > 5
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

  render(props) {
    return (
      <div className="signUp">
        <p>
          계정이 없으신가요? <a onClick={this.signUp}>가입하기</a>
        </p>
      </div>
    );
  }
}

export default SignUp;
