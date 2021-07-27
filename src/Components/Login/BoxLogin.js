import React, { Component } from 'react';

class BoxLogin extends Component {
  render() {
    return (
      <div className="BoxLogin">
        <input
          type="text"
          id="box"
          className="boxProperty"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
      </div>
    );
  }
}

export default BoxLogin;
