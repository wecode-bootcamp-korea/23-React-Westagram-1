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

  getValue = event => {
    this.setState({
      value: event.target.value,
    });
  };

  addComment = e => {
    this.setState({
      commentList: this.state.commentList.concat([this.state.value]),
      value: '',
    });
    e.preventDefault();
  };
  addCommEnter = e => {
    if (e.key === 'Enter') {
      this.setState({
        commentList: this.state.commentList.concat([this.state.value]),
        value: '',
      });
    }
    e.preventDefault();
  };

  render() {
    return (
      <>
        {console.log(this.state)}
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
              <li>hello</li>
              {this.state.commentList.map((comm, idx) => {
                return <Comment key={idx} msg={comm} />;
              })}
            </ul>
          </div>
          <form className="articleComment">
            <i className="far fa-smile"></i>
            <input
              className="comment"
              type="text"
              placeholder="add a comment.."
              onChange={this.getValue}
              //onKeyPress={this.addCommEnter}
            />
            <button onClick={this.addComment}>
              <i className="fas fa-check"></i>
            </button>
          </form>
        </article>
      </>
    );
  }
}

export default Article;
