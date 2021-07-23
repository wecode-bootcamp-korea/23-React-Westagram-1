import React, { Component } from 'react';
import Comment from './Comment';
import './Article.scss';

export class Article extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      commentList: [],
    };
  }

  getValue = e => {
    this.setState({
      value: e.target.value,
    });
  };

  addComment = () => {
    if (!this.state.value) {
      alert('add comment pls');
    } else {
      this.setState({
        commentList: this.state.commentList.concat([this.state.value]),
        value: '',
      });
      document.getElementsByClassName('commentInput')[0].value = '';
    }
  };

  addCommEnter = e => {
    console.log(e.key);
    if (e.key === 'Enter') {
      this.addComment();
    }
  };

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
          <div className="commentLine">
            <ul>
              {this.state.commentList.map((comm, idx) => {
                return <Comment key={idx} msg={comm} />;
              })}
            </ul>
          </div>
          <div className="articleComment">
            <i className="far fa-smile"></i>
            <input
              className="commentInput"
              type="text"
              placeholder="add a comment.."
              onChange={this.getValue}
              onKeyPress={this.addCommEnter}
            />
            <button onClick={this.addComment}>
              <i className="fas fa-check"></i>
            </button>
          </div>
        </article>
      </>
    );
  }
}

export default Article;
