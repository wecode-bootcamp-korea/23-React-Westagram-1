import React from 'react';
import './Personal.scss';

class Personal extends React.Component {
  render() {
    const { alt, src, nickname, Information } = this.props;
    return (
      <div className="personal">
        <img className="personalimg" alt={alt} src={src} />
        <div className="name">
          <div className="bold who">{nickname}</div>
          <div className="Information">{Information}</div>
        </div>
      </div>
    );
  }
}

export default Personal;
