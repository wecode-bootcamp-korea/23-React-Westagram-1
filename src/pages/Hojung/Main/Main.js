import React from 'react';
import './Main.scss';

class MainHojung extends React.Component {
  constructor(props) {
    super(props);
    this.commentKey = 0;
    this.state = {
      comments: [],
      commentBtn: false,
    };
  }
  commentAdd = e => {
    e.preventDefault();
    if (e.target.comment.value === '') {
      alert('댓글을 입력해주세요!');
      return;
    }
    this.commentKey = this.commentKey + 1;
    const _comments = this.state.comments.concat({
      id: `${this.commentKey}_id`,
      txt: e.target.comment.value,
      likeHeartBtn: false,
    });
    this.setState({
      comments: _comments,
      commentBtn: true,
    });
    e.target.comment.value = '';
    console.log(this.state.comments);
  };

  handleButton = e => {
    this.state.comments.likeHeartBtn === false
      ? this.setState({ commentBtn: true })
      : this.setState({ commentBtn: false });
  };

  commentLike = e => {
    const _comments = Array.from(this.state.comments);
    _comments.map(el => {
      if (el.id === e.target.parentElement.id) {
        el.likeHeartBtn = !el.likeHeartBtn;
      }
    });
    this.setState({
      comments: _comments,
    });
  };

  commentDelete = e => {
    const _comments = Array.from(this.state.comments);
    _comments.map((el, index) => {
      if (el.id === e.target.parentElement.id) {
        _comments.splice(index, 1);
      }
    });
    this.setState({
      comments: _comments,
    });
  };
  render() {
    let commentLists = [];
    this.state.comments.map(el => {
      commentLists.push(
        <li key={el.id} id={el.id}>
          <a href="/">{el.id}</a>
          {el.txt}
          <button
            onClick={this.commentLike}
            className={el.likeHeartBtn ? 'heartBtn active' : 'heartBtn'}
          >
            좋아요
          </button>
          <button className="deleteBtn" onClick={this.commentDelete}>
            삭제
          </button>
        </li>
      );
    });
    console.log(this.state.comments);
    return (
      <>
        <div id="main">
          <div className="contain">
            <div className="feeds">
              <article>
                <div className="feed">
                  <div className="writer">
                    <a href="/" className="writerInfo">
                      <div className="writerImg">
                        <img
                          alt="프로필 이미지"
                          src="/images/Hojung/profile_img.jpeg"
                        />
                      </div>
                      <div className="writerId">canon_mj</div>
                    </a>
                    <a href="/" className="writerOtherMenu">
                      <img
                        alt="게시글에 대한 다른메뉴 보기"
                        src="/images/Hojung/feed_writer_other_menu.png"
                      />
                    </a>
                  </div>
                  <div className="imgs">
                    <img alt="피드 이미지" src="/images/Hojung/feed_img.png" />
                  </div>
                  <div className="feedInfoWrap">
                    <div className="feedLink">
                      <div className="feedLinkLeft">
                        <a href="/">
                          <img
                            alt="좋아요 아이콘"
                            src="/images/Hojung/feed_link_left1.png"
                          />
                        </a>
                        <a href="/">
                          <img
                            alt="댓글 아이콘"
                            src="/images/Hojung/feed_link_left2.png"
                          />
                        </a>
                        <a href="/">
                          <img
                            alt="쪽지 아이콘"
                            src="/images/Hojung/feed_link_left3.png"
                          />
                        </a>
                      </div>
                      <div className="feedLinkRight">
                        <a href="/">
                          <img
                            alt="책갈피 아이콘"
                            src="/images/Hojung/feed_link_right1.png"
                          />
                        </a>
                      </div>
                    </div>
                    <div className="likeCount">
                      <div className="likeImg">
                        <img
                          alt="좋아요 누른 사람의 프로필사진"
                          src="/images/Hojung/profile_img.jpeg"
                        />
                      </div>
                      <div className="likeInfo">
                        <a href="/" className="likeUser">
                          anieworld
                        </a>
                        님{' '}
                        <a href="/" className="likeUserOther">
                          외 10명
                        </a>
                        이 좋아합니다
                      </div>
                    </div>
                    <div className="feedDecs">
                      <a href="/" className="feedWriter">
                        canon_mj
                      </a>
                      <div className="feedTxt">
                        위워크에서 진행한 베이킹 클래스...{' '}
                        <a href="/">더 보기</a>
                      </div>
                    </div>
                    <div className="feedComment">
                      <ul>{commentLists}</ul>
                      <div className="feedTime">42분전</div>
                    </div>
                  </div>
                  <div className="feedCommentInput">
                    <form onSubmit={this.commentAdd}>
                      <input
                        type="text"
                        className="input"
                        name="comment"
                        placeholder="댓글달기..."
                        onKeyUp={this.handleButton}
                      />
                      <button
                        className={
                          this.state.commentBtn
                            ? 'commentBtn active'
                            : 'commentBtn'
                        }
                      >
                        게시
                      </button>
                    </form>
                  </div>
                </div>
              </article>
            </div>
            <div className="sideMenu">
              <a href="/" className="myProfile">
                <div className="myImg">
                  <img
                    alt="프로필 이미지"
                    src="/images/Hojung/profile_img.jpeg"
                  />
                </div>
                <div className="myInfo">
                  <div className="myId">canon_mj</div>
                  <div className="myDesc">WeCode | 위코드</div>
                </div>
              </a>
              <div className="storyBox">
                <div className="tit">
                  <h3>스토리</h3>
                  <a href="/">모두보기</a>
                </div>
                <div className="con">
                  <ul>
                    <li>
                      <a href="/">
                        <div className="storyImg">
                          <div className="storyLine">
                            <img
                              alt="스토리 이미지"
                              src="/images/Hojung/profile_img.jpeg"
                            />
                          </div>
                        </div>
                        <div className="storyWriter">
                          <div className="writer">_yum_s</div>
                          <div className="writerTime">16분전</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <div className="storyImg">
                          <div className="storyLine">
                            <img
                              alt="스토리 이미지"
                              src="/images/Hojung/profile_img.jpeg"
                            />
                          </div>
                        </div>
                        <div className="storyWriter">
                          <div className="writer">_yum_s</div>
                          <div className="writerTime">16분전</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <div className="storyImg">
                          <div className="storyLine">
                            <img
                              alt="스토리 이미지"
                              src="/images/Hojung/profile_img.jpeg"
                            />
                          </div>
                        </div>
                        <div className="storyWriter">
                          <div className="writer">_yum_s</div>
                          <div className="writerTime">16분전</div>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <div className="storyImg">
                          <div className="storyLine">
                            <img
                              alt="스토리 이미지"
                              src="/images/Hojung/profile_img.jpeg"
                            />
                          </div>
                        </div>
                        <div className="storyWriter">
                          <div className="writer">_yum_s</div>
                          <div className="writerTime">16분전</div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="recommendationBox">
                <div className="tit">
                  <h3>회원님을 위한 추천</h3>
                  <a href="/">모두보기</a>
                </div>
                <div className="con">
                  <ul>
                    <li>
                      <div className="recommedImg">
                        <img
                          alt="스토리 이미지"
                          src="/images/Hojung/profile_img.jpeg"
                        />
                      </div>
                      <div className="recommedUser">
                        <div className="user">_yum_s</div>
                        <div className="userTxt">
                          _lenged_a님 외 2명이 팔로우 합니다.
                        </div>
                      </div>
                      <a href="/" className="userFollow">
                        팔로우
                      </a>
                    </li>
                    <li>
                      <div className="recommedImg">
                        <img
                          alt="스토리 이미지"
                          src="/images/Hojung/profile_img.jpeg"
                        />
                      </div>
                      <div className="recommedUser">
                        <div className="user">_yum_s</div>
                        <div className="userTxt">_lenged_a님이 팔로합니다.</div>
                      </div>
                      <a href="/" className="userFollow">
                        팔로우
                      </a>
                    </li>
                    <li>
                      <div className="recommedImg">
                        <img
                          alt="스토리 이미지"
                          src="/images/Hojung/profile_img.jpeg"
                        />
                      </div>
                      <div className="recommedUser">
                        <div className="user">_yum_s</div>
                        <div className="userTxt">_lenged_a님이 팔로합니다.</div>
                      </div>
                      <a href="/" className="userFollow">
                        팔로우
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <footer>
                <ul className="footLink">
                  <li>
                    <a href="/">Instagram 정보</a>
                  </li>
                  <li>
                    <a href="/">지원</a>
                  </li>
                  <li>
                    <a href="/">홍보 센터</a>
                  </li>
                  <li>
                    <a href="/">API</a>
                  </li>
                  <li>
                    <a href="/">채용 정보</a>
                  </li>
                  <li>
                    <a href="/">개인정보처리방침</a>
                  </li>
                  <li>
                    <a href="/">약관</a>
                  </li>
                  <li>
                    <a href="/">디렉터리</a>
                  </li>
                  <li>
                    <a href="/">프로필</a>
                  </li>
                  <li>
                    <a href="/">해시태그</a>
                  </li>
                  <li>
                    <a href="/">언어</a>
                  </li>
                </ul>
                <p className="copyRight">© 2021 INSTAGRAM FROM FACEBOOK</p>
              </footer>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default MainHojung;
