import React from 'react';
import './MainAside.scss';
import { withRouter } from 'react-router-dom';
import StoryBox from './storyBox/StoryBox';
import RecommendBox from './RecommendBox/RecommendBox';

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
    const { userInfo } = this.props;
    const { story, recommend } = this.state.save;
    // let email = this.props.userInfo.email;
    // if (this.props.userInfo.email) {
    //   email = email.slice(0, this.props.userInfo.email.indexOf('@'));
    // } ///this.props.userInfo.email 회원가입할때 적은 이메일값 //if 안쓰면 처음에 componentDidMount()들어오기전 email값이 없어서 slice함수에서 오류가 난다.
    //처음에는 그냥 출력하고  this.props.userInfo.email에 값이 들어오면 그때슬라이스해서 넣어줌 !
    return (
      <div className="mainAside">
        <div className="myprofil">
          <img
            alt="mango_9324Profilimg"
            className="userimg"
            src="/images/Jungmin/sel2.jpg"
          />
          <div className="name">
            {/* <div className="bold">{email}</div> */}
            <div className="bold">{userInfo}</div>
            {/* <div className="username">{this.props.userInfo.username}</div> */}
            <div className="username">최정민</div>
          </div>
          <button className="logoutButton" onClick={this.logout}>
            Logout
          </button>
        </div>
        <StoryBox story={story} />
        <RecommendBox recommendBox={recommend} />
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
