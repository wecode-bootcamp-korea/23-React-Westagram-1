import React from 'react';
import './Post.scss';

class Comment extends React.Component {
  render() {
    return (
      <div className="forPost">
        <div>
          <p>{this.props.nickname}</p> {this.props.comment}
        </div>
        <button onClick={this.props.changeLiked}>
          <img
            alt="heart"
            className="heart"
            id={this.props.id}
            src={
              this.props.isLiked
                ? '/images/Jungmin/heart.png'
                : 'https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png '
            }
          />
        </button>
      </div>
    );
  }
}

class NewComment extends React.Component {
  render() {
    let post = this.props.save;
    return (
      <>
        {post &&
          post.map(element => {
            return (
              <Comment
                key={element.id + element.name}
                id={element.id}
                nickname={element.name}
                comment={element.comment_text}
                isLiked={element.isLiked}
                changeLiked={this.props.changeLiked}
              />
            );
          })}
      </>
    );
  }
}

class Submit extends React.Component {
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
          className={
            this.props.value
              ? 'postButton postButtonOn'
              : 'postButton postButtonoff'
          }
          type="submit"
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
    fetch(`http://10.58.6.61:8000/postings/comment/${this.props.id}`)
      .then(res => res.json())
      .then(datas => {
        this.setState({
          save: datas.response,
        });
      });
  }

  changeComment = e => {
    this.setState({
      content: e.target.value,
    });
  };

  submitComment = e => {
    e.preventDefault();

    fetch(`http://10.58.6.61:8000/postings/comment/${this.props.id}`, {
      method: 'POST',
      body: JSON.stringify({
        post: this.props.id,
        comment_text: this.state.content,
      }),
      headers: {
        Authorization: localStorage.getItem('token'),
      },
    })
      .then(res => res.json())
      .then(datas => {});
    const email = this.props.userInfo.email.slice(
      0,
      this.props.userInfo.email.indexOf('@')
    ); //로그인 받아온 이메일의 앞 id값
    const contentObject = {
      id: this.state.save[this.state.save.length - 1].id + 1,
      name: email,
      comment_text: this.state.content,
      isLiked: false,
    };
    if (e.target.value === undefined && this.state.content !== '') {
      this.setState({
        save: this.state.save.concat(contentObject),
        content: '',
      });
    }
  };

  changeLiked = e => {
    const changeSave = Array.from(this.state.save);

    changeSave.map(ele => {
      if (ele.id === Number(e.target.id)) {
        ele.isLiked = !ele.isLiked;
      }
    });
    this.setState({
      save: changeSave,
    });

    let count = 0;
    this.state.save.forEach(ele => {
      if (ele.isLiked === true) {
        count++;
      }
    });
    this.props.heartCheck(count);
  };

  render() {
    return (
      <div className="post">
        <NewComment save={this.state.save} changeLiked={this.changeLiked} />
        <div className="commendTime  username ">
          <div>42분 전</div>
        </div>
        <Submit
          messageChangeState={this.submitComment}
          value={this.state.content}
          changeCommend={this.changeComment}
        />
      </div>
    );
  }
}

export default Post;
