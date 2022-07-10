import './App.css';
import Header from './naver/header';
import Content from './naver/body';
import Footer from './naver/footer';
import {useSelector, useDispatch} from 'react-redux';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import React, { useEffect } from 'react';
import axios from 'axios';
import { setNickname } from './store/userInfo';
import {GET_USER_INFO, REFRESH_TOKEN} from './static/link';
const TOKEN_EXPIRED = -3;
const TOKEN_INVALID = -2;
const TOKEN_NOT_EXIST = -1;

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

  const buttonHandler = async () => {
    await axios.post(
      REFRESH_TOKEN, {
        rftk : window.localStorage.getItem('rftk'),
      }, {
        withCredentials : true
      }
    )
  }
  useEffect(() => {
    async function getUserData() {
      const result = await axios.get(
        GET_USER_INFO,
        {withCredentials:true},
      );
      if (result.data.code === 0) {
        dispatch(setNickname(result.data.nickname));
      }
      return result.data.code;
    }

    async function refreshToken() {
      const result = await axios.post(
        REFRESH_TOKEN,
        {
          rftk : window.localStorage.getItem('rftk'),
        }, {withCredentials: true}
      )
      return result
    }
    getUserData().then( code => {
      if (code === TOKEN_EXPIRED) {
        refreshToken().then( refreshResult => {
          if (refreshResult.data.code === TOKEN_EXPIRED || refreshResult.data.code === TOKEN_INVALID || refreshResult.data.code === TOKEN_NOT_EXIST) {
            window.localStorage.removeItem('rftk');
            navigate('/', {replace : true});
          } else {
            window.localStorage.setItem('rftk', refreshResult.data.rftk);
            window.location.reload();
          }
        })
      } else if (code === TOKEN_INVALID || code === TOKEN_NOT_EXIST) {

        navigate('/', {replace: true});
      } else if (code === 0) {
        return 0;
      }
    });
  }, [dispatch, navigate]);

  return (
    <div className="App">
      <h1>이 페이지는 AccessToken이 존재한다면 로그인을 유지합니다.</h1>
      <h1>닉네임 : {nickname} </h1>
      <button type="button" onClick={buttonHandler} style={{display : 'none'}}>테스트</button>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NaverLogin />}></Route>
        <Route path="/dev" element={<DevPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
