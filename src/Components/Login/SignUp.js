import React from 'react';
import { withRouter } from 'react-router-dom';
import './SignUp.scss';

class SignUp extends React.Component {
  signUp = props => {
    const { id, pw } = this.props;
    if (id.indexOf('@') !== -1 && pw.length > 5) {
      fetch('http://192.168.29.61:8000/users/signup', {
        method: 'POST',
        body: JSON.stringify({
          email: this.state.id,
          password: this.state.pw,
        }),
      })
        .then(response => response.json())
        .then(result => {
          console.log('결과: ', result);
        });
    } else {
      alert('아이디와 비밀번호를 정확히 입력해 주세요.');
    }
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
