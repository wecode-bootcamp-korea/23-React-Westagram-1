import React from 'react';
import { withRouter } from 'react-router-dom';

class BoxLogin extends React.Component {
  render(props) {
    return (
      <div className="boxLogin">
        <input
          type="text"
          id="box"
          className="boxProperty"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={this.props.handleIdInput}
        />
      </div>
    );
  }
}

export default BoxLogin;
