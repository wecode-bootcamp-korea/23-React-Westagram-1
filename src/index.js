import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Pages/Login/Login';
import Main from './Pages/Main/Main';
import Signup from './Pages/Signup/Signup'
import Routes from './Routes'
import Common from './Styles/Common.scss'

ReactDOM.render(<Routes />, document.getElementById('root'));

//ReactDOM.render(<Main />, document.getElementById('root')); 

// 1arg: Component
// 2arg: DOM, -> id root인 엘리멘트를 가져옴.
// 첫번재 인자로 받은 컴포넌트를
// 두번재 인자로 받은 DOM 안에 넣어주는 것.


