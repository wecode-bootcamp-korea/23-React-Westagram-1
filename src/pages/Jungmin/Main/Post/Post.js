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
    const save = this.props.save;
    const post = save.map((value, index) => (
      <Comment nickname={index} comment={value} key={value + index} />
    ));
    return <>{post}</>;
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

  changeCommend = e => {
    this.setState({
      content: e.target.value,
    });
  };

  sumitCommend = e => {
    e.preventDefault();
    if (e.target.value === undefined && this.state.content !== '') {
      this.setState({
        save: this.state.save.concat(this.state.content),
        content: '',
      });
    }
  };

  render() {
    return (
      <div className="post">
        <Comment nickname={'hh.vv'} comment={'오 멋진 걸'} />
        <Comment nickname={'seoyun1203'} comment={'하이 에이치 아이 !!'} />
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
