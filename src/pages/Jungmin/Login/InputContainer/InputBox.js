import React from 'react';
import './InputContainer.scss';

class InputBox extends React.Component {
  render() {
    return (
      <form className="inputBox" onSubmit={this.props.onchange}>
        <input
          className="login"
          name={this.props.name}
          type={this.props.type}
          id={this.props.id}
          placeholder={this.props.placeholder}
          onChange={this.props.onchange}
          onKeyPress={e => {
            if (e.key === 'Enter') this.props.goTo();
          }}
          state={this.props.State}
        />
      </form>
    );
  }
}

export default InputBox;
