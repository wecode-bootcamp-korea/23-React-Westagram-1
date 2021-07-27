import React from 'react';
import './Post.scss';

class Comment extends React.Component {
  render() {
    return (
      <div className="forPost">
        <div>
          <p>{this.props.nickname}</p> {this.props.comment}
        </div>
        <img
          alt="heart"
          id="heart"
          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png "
        />
      </div>
    );
  }
}

class NewComment extends React.Component {
  render() {
    let post = this.props.save;
    return (
      <>
        {post.map(element => {
          return (
            <Comment
              key={element.id}
              nickname={element.userName}
              comment={element.content}
            />
          );
        })}
      </>
    );
  }
}

class Sumit extends React.Component {
  render() {
    return (
      <form className="sumit" onSubmit={this.props.messageChangeState}>
        <input
          type="text"
          className="textMessage username"
          placeholder="댓글 달기..."
          value={this.props.value}
          onChange={this.props.changeCommend}
        />
        <button
          className="postButton"
          type="submit"
          style={this.props.value ? { opacity: 1 } : { opacity: 0.5 }}
        >
          게시
        </button>
      </form>
    );
  }
}

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      save: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/Jungmin/commentData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        this.setState({
          save: data,
        });
      });
  }

  changeCommend = e => {
    this.setState({
      content: e.target.value,
    });
  };

  sumitCommend = e => {
    e.preventDefault();
    const contentObject = {
      id: this.state.save[this.state.save.length - 1].id + 1,
      userName: 'mango',
      content: this.state.content,
      isLiked: true,
    };
    if (e.target.value === undefined && this.state.content !== '') {
      this.setState({
        save: this.state.save.concat(contentObject),
        content: '',
      });
    }
  };

  render() {
    return (
      <div className="post">
        <NewComment save={this.state.save} />
        <div className="commendTime  username ">
          <div>42분 전</div>
        </div>
        <Sumit
          messageChangeState={this.sumitCommend}
          value={this.state.content}
          changeCommend={this.changeCommend}
        />
      </div>
    );
  }
}

export default Post;
