import './App.css';
import Header from './naver/header';
import Content from './naver/body';
import Footer from './naver/footer';
import BlogMain from './blog/blog';
import {useSelector, useDispatch} from 'react-redux';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import { setNickname } from './store/userInfo';
import {GET_USER_INFO, REFRESH_TOKEN} from './static/link';
import RequestServer from './Axios/Requst';
const TOKEN_EXPIRED = -3;

function NaverLogin() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  )
}

function DevPage() {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const nickname = useSelector(state => {
    return state.setUserinfo.nickname;
  })

  useEffect(() => {
    RequestServer("get", GET_USER_INFO).then(data => {
      if (data.code ===0 ) {
        dispatch(setNickname(data.nickname));
      } else if(data.code === TOKEN_EXPIRED) {
        RequestServer("post", REFRESH_TOKEN, {rftk : window.localStorage.getItem('rftk')}).then(data => {
          if (data.code === 0) {
            window.localStorage.setItem('rftk', data.rftk);
            window.location.reload();
          } else {
            window.localStorage.removeItem('rftk');
            navigate('/', {replace: true});
          }
        })
      } else {
        navigate('/', {replace: true})
      }
    });
  }, [dispatch, navigate]);

  return (
    <div className="App">
      <h1>이 페이지는 AccessToken이 존재한다면 로그인을 유지합니다.</h1>
      <h1>닉네임 : {nickname} </h1>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<NaverLogin />}></Route>
        <Route path="/dev" element={<DevPage />}></Route>
        <Route path="/" element={<BlogMain />}></Route>
        <Route path="/test" element={<button type='button' onClick={() => {
          window.location.reload();
        }}>Test</button>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
