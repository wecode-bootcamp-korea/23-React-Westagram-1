import React from 'react';
import './MainAside.scss';
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
    return (
      <div className="storyBox">
        <div className="storybar">
          <span className="username"> 스토리</span>
          <span className="bold">모두보기</span>
        </div>
        <div>
          <Personal
            nickname="jjiny_1019"
            Information="2분 전"
            alt="jjiny_1019Profilimg"
            src="/images/Jungmin/sel2.jpg"
          />
          <Personal
            nickname="joomxxyoung"
            Information="18분 전"
            alt="joomxxyoungProfilimg"
            src="/images/Jungmin/sel2.jpg"
          />
          <Personal
            nickname="noey._.os"
            Information="2시간 전"
            alt="noey._.osProfilimg"
            src="/images/Jungmin/sel2.jpg"
          />
        </div>
      </div>
    );
  }
}

class RecommendBox extends React.Component {
  render() {
    return (
      <div className="recommendBox">
        <div className="recommendbar">
          <span className="username"> 회원님을 위한 추천</span>
          <span className="bold">모두보기</span>
        </div>
        <div>
          <Personal
            nickname="choi077770"
            Information="회원님을 위한 추천"
            alt="choi077770Profilimg"
            src="/images/Jungmin/sel2.jpg"
          />
          <Personal
            nickname="ji.won.59"
            Information="회원님을 위한 추천"
            alt="ji.won.59Profilimg"
            src="/images/Jungmin/sel2.jpg"
          />
          <Personal
            nickname="8jungmin"
            Information="회원님을 위한 추천"
            alt="8jungminProfilimg"
            src="/images/Jungmin/sel2.jpg"
          />
        </div>
      </div>
    );
  }
}

class MainAside extends React.Component {
  render() {
    return (
      <div className="mainAside">
        <div className="myprofil">
          <img
            alt="mango_9324Profilimg"
            className="userimg"
            src="/images/Jungmin/sel2.jpg"
          />
          <div className="name">
            <div className="bold">mango9324_</div>
            <div className="username">최정민</div>
          </div>
        </div>
        <StoryBox />
        <RecommendBox />
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

export default MainAside;
