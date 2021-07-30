import React from 'react';
import { withRouter } from 'react-router-dom';

class BoxPw extends React.Component {
  pressEnter = e => {
    if (e.key === 'Enter') {
      this.props.goToMain();
    }
  };

  render(props) {
    const { handlePwInput } = this.props;
    return (
      <div className="boxPw">
        <input
          type="text"
          id="box2"
          className="boxProperty"
          placeholder="비밀번호"
          onChange={handlePwInput}
          onKeyPress={this.pressEnter}
        />
      </div>
    );
  }
}

export default BoxPw;
