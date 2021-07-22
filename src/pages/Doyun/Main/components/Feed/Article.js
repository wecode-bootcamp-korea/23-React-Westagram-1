import React, { Component } from 'react';
import './Article.scss';

export class Article extends Component {
  render() {
    return (
      <>
        <article className="article">
          <div className="articleHeader">
            <img className="profile" src={this.props.profile} alt="profile" />
            <span>winni_dominguez</span>
            <i className="fas fa-ellipsis-h"></i>
          </div>
          <img className="articleImg" src={this.props.main} alt="dua-lipa" />
          <div className="articleInfoIcon">
            <i className="far fa-heart"></i>
            <i className="far fa-comment"></i>
            <i className="fas fa-share-alt"></i>
            <i className="far fa-bookmark"></i>
          </div>
          <p className="articleLikes">33 likes</p>
          <p className="articleTimeGap">8 hours ago</p>
          <div className="commentLine"></div>
          <div className="articleComment">
            <i className="far fa-smile"></i>
            <input
              className="comment"
              type="text"
              placeholder="add a comment.."
            />
            <button>
              <i className="fas fa-check"></i>
            </button>
          </div>
        </article>
      </>
    );
  }
}

export default Article;
