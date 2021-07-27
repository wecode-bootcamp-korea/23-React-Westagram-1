/*eslint-disable*/

import React from 'react';
import { withRouter } from 'react-router-dom';
import CommentList from '../../../Components/Main/CommentList.js';
import './Main.scss';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footerContainer">
        <div className="footerBox">
          <div className="footerBoxTop">
            <ul>
              <li>소개</li>
              <li>도움말</li>
              <li>홍보 센터</li>
              <li>API</li>
              <li>채용 정보</li>
              <li>개인정보처리방침</li>
              <li>약관</li>
              <li>위치</li>
              <li>인기 계정</li>
              <li>해시 태그</li>
              <li>언어</li>
            </ul>
          </div>

          <div className="footerBoxBtm">
            <ul>
              <li>© 2021 INSTAGRAM FROM FACEBOOK</li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
}

class MainJungwoo extends React.Component {
  constructor() {
    super();
    this.state = {
      newReply: '',
      replies: [
        /* {
          userId: '',
          text: '',
        }, */
      ],
      userProfile: [
        {
          url: '../../images/Jungwoo/ photo-124941274df.jpeg',
          userId: 'abcdfdgas',
          userName: '김슬기',
        },
        {
          url: '../../images/Jungwoo/photo-1626318291075-17d488564b0b.jpeg',
          userId: 'abdsdasaf',
          userName: '하상현',
        },
        {
          url: '../../images/Jungwoo/photo-1593642532871-8b12e02d091c (1).jpeg',
          userId: 'abcddgfss',
          userName: '이봉주',
        },
        {
          url: '../../images/Jungwoo/photo-1626322730283-fd66ddea926c.jpeg',
          userId: 'absdfdsdf',
          userName: '한사랑',
        },
        {
          url: '../../images/Jungwoo/photo-1626318291075-17d488564b0b.jpeg',
          userId: 'abgdfcsdf',
          userName: '하리보',
        },
      ],
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/Jungwoo/commentData.json', {
      method: 'GET', // GET method는 기본값이라서 생략이 가능합니다.
    }) // 예시코드에서는 이해를 돕기 위해 명시적으로 기입해뒀습니다.
      .then(res => res.json())
      .then(data => {
        this.setState({
          replies: data,
        });
      });
  }

  textChange = e => {
    let { value } = e.target;
    this.setState({
      newReply: value,
    });
  };

  addComment = () => {
    let arr = this.state.replies;
    arr.push({
      userId: '안녕하세요',
      text: this.state.newReply,
    });

    this.setState({
      replies: arr,
      newReply: '',
    });
  };

  pressEnter = e => {
    if (e.key === 'Enter' && this.state.newReply) {
      this.addComment();
      e.target.value = '';
    }
  };

  render() {
    return (
      <>
        <main className="mainContainer">
          <article className="feedsArticle">
            <div className="articleHeader">
              <img src="../../images/Jungwoo/caleb-ekeroth-wSBQFWF77lI-unsplash (1).jpg" />
              <p className="navId">todayhouse</p>
              <img className="dot" src="../../images/Jungwoo/more.png" />
            </div>

            <div className="articlePic">
              <img src="https://source.unsplash.com/user/erondu/1600x900" />
            </div>

            <div className="articleComment">
              <div className="commentIcons">
                <img
                  className="iconHeart"
                  src="../../images/Jungwoo/red_heart.png"
                />
                <img className="iconChat" src="../../images/Jungwoo/chat.png" />
                <img className="iconSend" src="../../images/Jungwoo/send.png" />
                <img
                  className="iconBookMark"
                  src="../../images/Jungwoo/bookmark.png"
                />
              </div>

              <div className="commentLike">
                <p>좋아요 1,065개</p>
              </div>

              <div className="commentHour">
                <p>5시간 전</p>
              </div>

              <div>
                <ul className="textBox">
                  <CommentList commentList={this.state.replies} />
                </ul>
              </div>

              <div className="commentInput">
                <img src="../../images/Jungwoo/smile.png" />
                <input
                  type="text"
                  id="commentText"
                  placeholder="댓글 달기..."
                  onChange={this.textChange}
                  onKeyPress={this.pressEnter}
                  value={this.state.newReply}
                />
                <button onClick={this.addComment}>게시</button>
              </div>
            </div>
          </article>

          <div className="main-right">
            <div className="rightProfile">
              <img
                className="profileJungwoo"
                src="../../images/Jungwoo/caleb-ekeroth-wSBQFWF77lI-unsplash (1).jpg"
              />
              <div className="rightProfileclassName">
                <p className="navId">todayhouse</p>
                <p id="navName">박정우</p>
              </div>
              <p className="rightRecommendTextBlue">전환</p>
            </div>

            <div className="rightRecommend">
              <div className="rightRecommendTitle">
                <h6>회원님을 위한 추천</h6>
                <p className="rightRecommendTextBlue">모두 보기</p>
              </div>

              <div className="rightRecommendPeople">
                <div className="rightRecommendPerson">
                  {this.state.userProfile.map(e => {
                    return (
                      <div className="rightProfile">
                        <img className="rightProfileImg" src={e.url} />
                        <div className="rightProfileclassName">
                          <p className="navId">{e.userId}</p>
                          <p className="rightprofilenavName">{e.userName}</p>
                        </div>
                        <p className="rightRecommendTextBlue">프로필</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            <Footer />
          </div>
        </main>
      </>
    );
  }
}

export default MainJungwoo;
