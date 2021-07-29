import React from 'react';
import { withRouter } from 'react-router-dom';

class BoxPw extends React.Component {
  render(props) {
    return (
      <div className="boxPw">
        <input
          type="text"
          id="box2"
          className="boxProperty"
          placeholder="비밀번호"
          onChange={this.props.handlePwInput}
        />
      </div>
    );
  }
}

export default BoxPw;
