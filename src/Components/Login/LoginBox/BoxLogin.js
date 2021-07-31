import React from 'react';
import { withRouter } from 'react-router-dom';

class BoxLogin extends React.Component {
  pressEnter = e => {
    if (e.key === 'Enter') {
      this.props.goToMain();
    }
  };

  render(props) {
    const { handlePwInput } = this.props;
    const { handleIdInput } = this.props;
    return (
      <>
        <div className="boxLogin">
          <input
            type="text"
            className="boxProperty"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={handleIdInput}
          />
        </div>
        <div className="boxLogin">
          <input
            type="text"
            className="boxProperty"
            placeholder="비밀번호"
            onChange={handlePwInput}
            onKeyPress={this.pressEnter}
          />
        </div>
      </>
    );
  }
}

export default BoxLogin;
