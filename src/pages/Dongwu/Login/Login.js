import React from 'react';
import styles from './Login.module.scss';
import { withRouter } from 'react-router-dom';

// import { Link } from "react-router-dom";

class LoginNav extends React.Component {
  render() {
    return (
      <nav className={`${styles.loginHeader}`}>
        <div className={`${styles.headerContainer}`}>
          <span>한국어</span>
          <i className="fas fa-chevron-down"></i>
        </div>
      </nav>
    );
  }
}

class LoginInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.state;
  }

  renderInput(labelId, inputId, inputType, placeholder) {
    // console.log(this.state);
    return (
      <div className={`${styles.loginBlockLabel}`}>
        <label id={labelId}>
          <input
            id={inputId}
            type={inputType}
            placeholder={placeholder}
            onChange={event => {
              console.log(event.target.value);
            }}
          />
        </label>
      </div>
    );
  }

  render() {
    return (
      <>
        {this.renderInput(
          `loginId`,
          `loginIdInput`,
          `text`,
          `전화번호, 사용자 이름 또는 이메일`
        )}
        {this.renderInput(`loginPw`, `loginPwInput`, `password`, `비밀번호`)}
      </>
    );
  }
}

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      loginId: [],
      loginPw: [],
    };
  }

  setParentValue = (labelId, value) => {
    this.setState({ [labelId]: value });
  };

  handleSubmit = e => {
    if (this.state[`loginId`].length < 8 || this.state[`loginPw`].length < 8) {
      e.preventDefault();
      alert(`ID, 비밀번호를 확인해주세요.`);
    } else {
      e.preventDefault();
      this.props.history.push(`/main`);
    }
  };

  render() {
    console.log(this.state);

    return (
      <form
        className={`${styles.loginBlockForm}`}
        // action="./main"
        onSubmit={this.handleSubmit}
        action=""
      >
        <div className={`${styles.loginBlockWrap}`}>
          <div className={`${styles.loginBlockFacebook}`}>
            <button>
              <img alt="facebook Logo" src="/images/facebook.svg" />
              Facebook으로 계속하기
            </button>
          </div>
          <div className={`${styles.loginBlockOr}`}>
            <div className={`${styles.lineDiv}`}></div>
            <div className={`${styles.loginBlockOrText}`}>
              <span>또는</span>
            </div>
            <div className={`${styles.lineDiv}`}></div>
          </div>
          <LoginInput state={this.state} setParentValue={this.setParentValue} />
          <div className={`${styles.loginBlockNewPw}`}>
            <a href="#">비밀번호를 잊으셨나요?</a>
          </div>
          <div className={`${styles.loginBlockButton}`}>
            <button id="loginBtn">로그인</button>
          </div>
        </div>
        <div className={`${styles.signUp}`}>
          <span>
            계정이 없으신가요? <a href="#">가입하기</a>
          </span>
        </div>
      </form>
    );
  }
}

class LoginArticle extends React.Component {
  render() {
    return (
      <article className={`${styles.login}`}>
        <div className={`${styles.loginContainer}`}>
          <div className={`${styles.loginBlock}`}>
            <h1 className={`${styles.logo}`}>Westagram</h1>
            <LoginForm history={this.props.history} />
          </div>
        </div>
      </article>
    );
  }
}

class LoginFooter extends React.Component {
  render() {
    return (
      <footer>
        <div className={`${styles.loginFooterWrap}`}>
          <div className={`${styles.loginFooterDesc}`}>
            <div>
              <a href="#">소개</a>
            </div>
            <div>
              <a href="#">블로그</a>
            </div>
            <div>
              <a href="#">채용 정보</a>
            </div>
            <div>
              <a href="#">도움말</a>
            </div>
            <div>
              <a href="#">API</a>
            </div>
            <div>
              <a href="#">개인정보처리방침</a>
            </div>
            <div>
              <a href="#">약관</a>
            </div>
            <div>
              <a href="#">인기 계정</a>
            </div>
            <div>
              <a href="#"> 해시태그 </a>
            </div>
            <div>
              <a href="#"> 위치 </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

class Login extends React.Component {
  goToMain = () => {
    this.props.history.push(`/main`);
  };

  render() {
    return (
      <>
        <section className={`${styles.loginSection}`}>
          <main className={`${styles.loginMain}`}>
            <LoginNav />
            <LoginArticle history={this.props.history} />
            <div className={`${styles.facebookLogo}`}>
              <span>from</span>
              <span>FACEBOOK</span>
            </div>
          </main>
        </section>
        <LoginFooter />
      </>
    );
  }
}

export default withRouter(Login);
