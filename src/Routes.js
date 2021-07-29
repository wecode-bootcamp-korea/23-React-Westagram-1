import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// component import
import Nav from './Components/Nav/Nav';

// 동우's 컴포넌트
import LoginDongwu from './pages/Dongwu/Login/Login';
import MainDongwu from './pages/Dongwu/Main/Main';

// 도윤's 컴포넌트
import LoginDoyun from './pages/Doyun/Login/Login';
import MainDoyun from './pages/Doyun/Main/Main';

// 호정's 컴포넌트
import SignHojung from './pages/Hojung/Sign/Sign';
import LoginHojung from './pages/Hojung/Login/Login';
import MainHojung from './pages/Hojung/Main/Main';

// 정민's 컴포넌트
import LoginJungmin from './pages/Jungmin/Login/Login';
import MainJungmin from './pages/Jungmin/Main/Main';

// 정우's 컴포넌트
import LoginJungwoo from './pages/Jungwoo/Login/Login';
import MainJungwoo from './pages/Jungwoo/Main/Main';

// import 한 컴포넌트 경로

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/login-dongwu" component={LoginDongwu} />
          <Route exact path="/main-dongwu" component={MainDongwu} />

          <Route exact path="/login-doyun" component={LoginDoyun} />
          <Route exact path="/main-doyun" component={MainDoyun} />

          <Route exact path="/sign-hojung" component={SignHojung} />
          <Route exact path="/login-hojung" component={LoginHojung} />
          <Route exact path="/main-hojung" component={MainHojung} />

          <Route exact path="/login-jungmin" component={LoginJungmin} />
          <Route exact path="/main-jungmin" component={MainJungmin} />

          <Route exact path="/login-jungwoo" component={LoginJungwoo} />
          <Route exact path="/main-jungwoo" component={MainJungwoo} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
