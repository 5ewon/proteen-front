import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';

import IntroduceWrapPage from "./js/introduce/WrapPage/WrapPage";
import Login from './js/login/Login';
import Join from './js/join/Join';
import Main from './js/main/Main';
import React, { useState } from 'react';

function App() {
  // 여기서 로그인이 됐는지 state에 값을 저장한 후
  // IntroduceWrapPage, Main, Login, Join에 prop으로 전달
  // 그 값을 토대로 각각 라우팅 될건지 만듦
  const [isLogined, setIsLogined] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="introduce" element={<IntroduceWrapPage isLogined={isLogined} />} />
        {isLogined ? null :
          <>
            <Route path="login" element={<Login />} />
            <Route path="join" element={<Join />} />
          </>
        }
        <Route path='main/*' element={<Main isLogined={isLogined} />} />
        <Route 
          path='/' 
          element={<Navigate to="main"/>} 
        />
      </Routes>
    </Router>
  );
}

export default React.memo(App);
