import './App.css';
import Header from './naver/header';
import Content from './naver/body';
import Footer from './naver/footer';
import {useSelector} from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

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

  const user_id = useSelector(state => {
    return state.setUserinfo.id;
  })

  return (
    <div className="App">
      <h1>isLogin</h1>
      <h1>ID : {user_id} </h1>
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
