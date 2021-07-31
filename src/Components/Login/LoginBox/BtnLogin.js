import React from 'react';
import { withRouter } from 'react-router-dom';
import './BtnLogin.scss';

class BtnLogin extends React.Component {
  render(props) {
    const { id, pw, goToMain } = this.props;
    return (
      <div className="btnLogin">
        <button
          className={
            id.includes('@') && pw.length > 5 ? `activated` : `deActivated`
          }
          onClick={goToMain}
        >
          로그인
        </button>
      </div>
    );
  }
}

export default BtnLogin;
