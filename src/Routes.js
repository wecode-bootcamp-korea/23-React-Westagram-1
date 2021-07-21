// 동우's 컴포넌트
import LoginDongWu from "./Pages/Dongwu/Login/Login";
import MainDongWu from "./Pages/Dongwu/Main/Main";

// 도윤's 컴포넌트
import LoginDoyun from "./Pages/Doyun/Login/Login";
import MainDoyun from "./Pages/Doyun/Main/Main";

// 호정's 컴포넌트
import LoginHojung from "./Pages/LoginHojung/Login/Login";
import MainHojung from "./Pages/Hojung/Main/Main";

// 정민's 컴포넌트
import LoginJungmin from "./Pages/Jungmin/Login/Login";
import MainJungmin from "./Pages/Jungmin/Main/Main";

// 정우's 컴포넌트
import LoginJungwoo from "./Pages/Jungwoo/Login/Login";
import MainJungwoo from "./Pages/Jungwoo/Main/Main";

// import 한 컴포넌트 경로

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login-dongwu" component={LoginDongwu} />
          <Route exact path="/main-dongwu" component={MainDongwu} />

          <Route exact path="/login-doyun" component={LoginDoyun} />
          <Route exact path="/main-doyun" component={MainDoyun} />

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
