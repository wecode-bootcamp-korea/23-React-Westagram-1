import React, { Component } from 'react';
import './Comment.scss';

export class comment extends Component {
  render() {
    return (
      <>
        <div className="comment">
          <img
            className="profile"
            src="/images/Doyun/profile.png"
            alt="profile"
          />
          <li id={this.props.id} className="comment">
            {this.props.msg}
          </li>
        </div>
      </>
    );
  }
}

export default comment;
