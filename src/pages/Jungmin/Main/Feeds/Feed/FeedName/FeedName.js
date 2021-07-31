import React from 'react';
import './FeedName.scss';

class FeedName extends React.Component {
  render() {
    return (
      <div className="feedName">
        <div className="feedUserIdandImg">
          <img alt={this.props.alt} className="profil" src={this.props.src} />
          <p>{this.props.feeduserId}</p>
        </div>
        <div className="moreicon">
          <i className="fas fa-ellipsis-h"></i>
        </div>
      </div>
    );
  }
}

export default FeedName;
