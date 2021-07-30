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

  componentDidMount() {
    fetch('/data/Doyun/commentData.json', {})
      .then(res => res.json())
      .then(data => {
        this.setState({
          commentList: data,
        });
      });
  }

  getValue = e => {
    this.setState({
      value: e.target.value,
    });
  };

  addComment = e => {
    const { value, commentList } = this.state;
    if (e.key === 'Enter') {
      if (!value) {
        alert('add comment pls');
      } else {
        this.setState({
          commentList: commentList.concat({
            id: Math.random(),
            content: value,
            img: '/images/Doyun/profile.png',
          }),
          value: '',
        });
        document.getElementsByClassName('commentInput')[0].value = '';
      }
    } else if (e.target.classList[0] === 'fas') {
      if (!value) {
        alert('add comment pls');
      } else {
        this.setState({
          commentList: commentList.concat({
            id: Math.random(),
            content: value,
            img: '/images/Doyun/profile.png',
          }),
          value: '',
        });
        document.getElementsByClassName('commentInput')[0].value = '';
      }
    }
  };

  addCommEnter = e => {
    if (e.key === 'Enter') {
      this.addComment();
    }
  };

  // addLike = () => {
  //   const index = this.props.number;
  //   const like = this.props.like + 1;
  //   this.props.setter(index, like);
  // };

  render() {
    const { getValue, addComment, addCommEnter } = this;
    const { commentList } = this.state;
    const { profile, main, like } = this.props;
    return (
      <>
        <article className="article">
          <div className="articleHeader">
            <img className="profile" src={profile} alt="profile" />
            <span>winni_dominguez</span>
            <i className="fas fa-ellipsis-h"></i>
          </div>
          <img className="articleImg" src={main} alt="dua-lipa" />
          <div className="articleInfoIcon">
            <i className="far fa-heart" onClick={this.addLike}></i>
            <i className="far fa-comment"></i>
            <i className="fas fa-share-alt"></i>
            <i className="far fa-bookmark"></i>
          </div>
          <p className="articleLikes">{like} likes</p>
          <p className="articleTimeGap">8 hours ago</p>
          <div className="commentLine">
            <ul>
              {commentList.map((comment, i) => {
                return (
                  <Comment
                    key={comment.id}
                    msg={comment.content}
                    img={comment.img}
                  />
                );
              })}
            </ul>
          </div>
          <div className="articleComment">
            <i className="far fa-smile"></i>
            <input
              className="commentInput"
              type="text"
              placeholder="add a comment.."
              onChange={getValue}
              onKeyPress={addComment}
            />
            <button onClick={addComment}>
              <i className="fas fa-check"></i>
            </button>
          </div>
        </article>
      </>
    );
  }
}

export default Article;