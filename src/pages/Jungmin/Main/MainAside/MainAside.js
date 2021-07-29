import React from 'react';
import './MainAside.scss';
import { withRouter } from 'react-router-dom';
class Personal extends React.Component {
  render() {
    return (
      <div className="personal">
        <img
          className="personalimg"
          alt={this.props.alt}
          src={this.props.src}
        />
        <div className="name">
          <div className="bold who">{this.props.nickname}</div>
          <div className="Information">{this.props.Information}</div>
        </div>
      </div>
    );
  }
}

class StoryBox extends React.Component {
  render() {
    const story1 = this.props.story;
    return (
      <div className="storyBox">
        <div className="storybar">
          <span className="username"> 스토리</span>
          <span className="bold">모두보기</span>
        </div>
        <div>
          {story1 &&
            story1.map(ele => {
              return (
                <Personal
                  key={ele.id}
                  nickname={ele.nickname}
                  Information={ele.Information}
                  alt={ele.alt}
                  src={ele.src}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

class RecommendBox extends React.Component {
  render() {
    const recommendBox = this.props.recommendBox;
    return (
      <div className="recommendBox">
        <div className="recommendbar">
          <span className="username"> 회원님을 위한 추천</span>
          <span className="bold">모두보기</span>
        </div>
        <div>
          {recommendBox &&
            recommendBox.map(ele => {
              return (
                <Personal
                  key={ele.id}
                  nickname={ele.nickname}
                  Information={ele.Information}
                  alt={ele.alt}
                  src={ele.src}
                />
              );
            })}
        </div>
      </div>
    );
  }
}

class MainAside extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      save: {},
    };
  }

  logout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/login-jungmin');
  };

  componentDidMount() {
    fetch('http://localhost:3000/data/Jungmin/StoryBox.json')
      .then(res => res.json())
      .then(dates => {
        this.setState({
          save: dates,
        });
      });
  }
  render() {
    const email = this.props.userInfo.email.slice(
      0,
      this.props.userInfo.email.indexOf('@')
    );
    return (
      <div className="mainAside">
        <div className="myprofil">
          <img
            alt="mango_9324Profilimg"
            className="userimg"
            src="/images/Jungmin/sel2.jpg"
          />
          <div className="name">
            <div className="bold">{email}</div>
            <div className="username">{this.props.userInfo.username}</div>
          </div>
          <button className={'loginButton loginButtonOn'} onClick={this.logout}>
            Logout
          </button>
        </div>
        <StoryBox story={this.state.save.story} />
        <RecommendBox recommendBox={this.state.save.recommend} />
        <div className="info">
          westagram
          정보.지원.홍보센터.API.채용정보.개인정보처리방침.약관.디렉터리.프로필.해시태그.언어
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          ＠ 2021 WESTAGRAM
        </div>
      </div>
    );
  }
}

export default withRouter(MainAside);
