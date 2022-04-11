import News from "./pages/news";
import Stock from "./pages/stock";
import StockItem from "./components/stockItem";
import Login from './pages/loginpage'
import Signup from './pages/signuppage'
import Crypto from './pages/crypto'
import Cookies from 'universal-cookie';
import './App.css'
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import {useState} from 'react'

function App() {
  const cookies = new Cookies();
  cookies.set('stocks', 'empty', {path:'/'});
  console.log(cookies.get('testCookie'));
  // const [user, setLoginUser] =useState({})
  // const bool = true
  // if(!(user && user._id)){
    // return(
      // <div className="App">
        {/* <BrowserRouter> */}
          {/* <Routes> */}
            {/* <Route path='/' element={<Login setLoginUser={setLoginUser}/>} /> */}
            {/* <Route path='/signup' element={<Signup />} /> */}
          {/* </Routes> */}
        {/* </BrowserRouter> */}
{/*  */}
      {/* </div> */}
    // )
  // }
  // else{
  return (
    <div className="App">
      <Stock cookieTracker={cookies}></Stock>
      {/* <Crypto> </Crypto> */}
      {/* <News></News> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Header />}>
            <Route path="news" element={<News />} />
          </Route> */}
        {/* </Routes> */}
        {/* <div class="header">

        </div>
        <News></News> */}

      {/* </BrowserRouter> */}

    </div >
  );
      
}

function Header() {
  return (
    <div>
      <div className="header">
        {/* <Link to="/news">News</Link> */}
        {/* <Link to='news'></Link> */}
        <nav>
          <Link to='news' className="linkStyle">News</Link>
        </nav>
      </div>
      <Outlet />
    </div>


  )
}

export default App;
