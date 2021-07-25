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

// class Message extends React.Component {
//   render() {
//     return (
//       <div className="message">
//         <input
//           name="name"
//           type="text"
//           className="textMessage username"
//           placeholder="댓글 달기..."
//           onKeyUp={this.props.change}
//         />
//         <button className="postButton" onClick={this.props.click} value="click">
//           게시
//         </button>
//       </div>
//     );
//   }
// }

// class NewComment extends React.Component {
//   render() {
//     const saveq = this.props.save;
//     const post = saveq.map((value, index) => (
//       <Comment nickname={index} comment={value} />
//     ));
//     return <>{post}</>;
//   }
// }

// class Post extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       nickname: '',
//       content: '',
//       save: [],
//     };
//   }

//   // sumitCommend = e => {
//   //   if (e.target.value === 'click' || e.key === 'Enter') {
//   //     this.setState({
//   //       save: this.state.save.concat(this.state.content),
//   //       content: '',
//   //     });
//   //     e.target.value = '';
//   //   } else {
//   //     this.setState({
//   //       content: e.target.value,
//   //     });
//   //   }
//   // };
//   changeCommend = e => {
//     console.log(e.target);
//     this.setState({
//       content: e.target.value,
//     });
//   };

//   sumitCommend = e => {
//     this.setState({
//       save: this.state.save.concat(this.state.content),
//     });
//   };

//   render() {
//     console.log(this.state);
//     return (
//       <div className="post">
//         <Comment nickname={'hh.vv'} comment={'오 멋진 걸'} />
//         <Comment nickname={'seoyun1203'} comment={'하이 에이치 아이 !!'} />
//         <NewComment save={this.state.save} />
//         <div className="commendTime  username ">
//           <div>42분 전</div>
//         </div>
//         <Message
//           messageChangeState={this.changeState}
//           click={this.sumitCommend}
//           change={this.changeCommend}
//         />
//       </div>
//     );
//   }
// }

class Message extends React.Component {
  render() {
    return (
      <form
        className="message"
        // onSubmit={this.props.click}
        onSubmit={this.props.messageChangeState}
      >
        <input
          name="name"
          type="text"
          className="textMessage username"
          placeholder="댓글 달기..."
          // onKeyUp={this.props.change}
          onKeyUp={this.props.changeCommend}
        />
        <button className="postButton" type="submit">
          게시
        </button>
      </form>
    );
  }
}

class NewComment extends React.Component {
  render() {
    const saveq = this.props.save;
    const post = saveq.map((value, index) => (
      <Comment nickname={index} comment={value} />
    ));
    return <>{post}</>;
  }
}

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nickname: 0,
      content: '',
      save: [],
    };
  }

  changeCommend = e => {
    console.log(e.target.value);
    // this.state.content = '';
    this.setState({
      content: e.target.value,
    });
    console.log(this.state.nickname, this.state.save.length);
    console.log('렌더 후 ', this.state);
    this.sumitCommend(e);
  };

  sumitCommend = e => {
    e.preventDefault();
    if (e.target.value === undefined && this.state.content !== '') {
      this.setState({
        save: this.state.save.concat(this.state.content),
      });
    }
    if (this.state.nickname !== this.state.save.length) {
      this.setState({
        nickname: (this.state.nickname = this.state.nickname + 1),
      });
      e.target.value = '';
    }
    console.log('누구냐', e.target);
  };

  // changeCommend = e => {
  //   console.log(e.target.value);
  //   // this.state.content = '';
  //   this.setState({
  //     content: e.target.value,
  //   });

  //   if (this.state.nickname === false) {
  //     e.target.value = '';
  //     this.setState({
  //       nickname: !this.state.nickname,
  //     });
  //   }
  // };

  // sumitCommend = (e) => {
  //   e.preventDefault();
  //   this.setState({
  //     save: this.state.save.concat(this.state.content),
  //     nickname: !this.state.nickname,
  //   });
  // };

  render() {
    // if (this.state.nickname !== this.state.save.length) {
    //   this.setState({
    //     nickname: (this.state.nickname = this.state.nickname + 1),
    //   });
    //   console.log('렌더 후 ', this.state);
    // }
    return (
      <div className="post">
        <Comment nickname={'hh.vv'} comment={'오 멋진 걸'} />
        <Comment nickname={'seoyun1203'} comment={'하이 에이치 아이 !!'} />
        <NewComment save={this.state.save} />
        <div className="commendTime  username ">
          <div>42분 전</div>
        </div>
        <Message
          messageChangeState={this.sumitCommend}
          changeCommend={this.changeCommend}
          // change={this.changeCommend}
        />
      </div>
    );
  }
}

export default Post;
