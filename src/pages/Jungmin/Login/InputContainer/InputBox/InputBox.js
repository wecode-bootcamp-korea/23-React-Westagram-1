import React from 'react';
import './InputBox.scss';

class InputBox extends React.Component {
  render() {
    const { name, type, id, placeholder, onchange, goTo } = this.props;
    return (
      <form className="inputBox" onSubmit={goTo}>
        <input
          className="login"
          name={name}
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onchange}
        />
      </form>
    );
  }
}

export default InputBox;
