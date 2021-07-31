import React from 'react';
import './Post.scss';
import Comment from './Comment/Comment';
import Submit from './Submit/Submit';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      save: [],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/Jungmin/commentData.json')
      .then(res => res.json())
      .then(datas => {
        this.setState({
          save: datas,
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

    // fetch(`http://10.58.0.158:8000/postings/comment`, {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     post: this.props.id,
    //     comment_text: this.state.content,
    //   }),
    //   headers: {
    //     Authorization: localStorage.getItem('token'),
    //   },
    // })
    //   .then(res => res.json())
    //   .then(datas => {});

    // const email = this.props.userInfo.email.slice(
    //   0,
    //   this.props.userInfo.email.indexOf('@')
    // ); //로그인 받아온 이메일의 앞 id값
    const { save, content } = this.state;
    const { value } = e.target;
    const { userInfo } = this.props;
    const contentObject = {
      id: save[save.length - 1].id + 1,
      user: userInfo,
      content: content,
      isLiked: false,
    };
    if (value === undefined && content !== '') {
      this.setState({
        save: save.concat(contentObject),
        content: '',
      });
    }
  };

  changeLiked = e => {
    const changeSave = [...this.state.save];
    changeSave.map(ele => {
      if (ele.id === Number(e.target.id)) {
        ele.isLiked = !ele.isLiked;
      }
    });
    this.setState({
      save: changeSave,
    });
  };

  render() {
    const post = this.state.save;
    return (
      <div className="post">
        {post &&
          post.map(element => {
            return (
              <Comment
                key={element.user}
                id={element.id}
                nickname={element.user}
                comment={element.content}
                isLiked={element.isLiked}
                changeLiked={this.changeLiked}
              />
            );
          })}
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
