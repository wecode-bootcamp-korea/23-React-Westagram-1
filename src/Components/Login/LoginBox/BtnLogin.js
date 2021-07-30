import React from 'react';
import { withRouter } from 'react-router-dom';
import './BtnLogin.scss';

class BtnLogin extends React.Component {
  render(props) {
    const { idInputValue, pwInputValue, goToMain } = this.props;
    return (
      <div className="btnLogin">
        <button
          className={
            idInputValue.includes('@') && pwInputValue.length > 5
              ? `activated`
              : `deActivated`
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
