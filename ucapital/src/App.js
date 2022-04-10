import News from "./pages/news";
import Stock from "./pages/stock";
import StockItem from "./components/stockItem";
import Login from './pages/loginpage'
import Signup from './pages/signuppage'
import Home from './pages/home'
import './App.css'
import { BrowserRouter, Route, Routes, Link, Outlet, useNavigate } from "react-router-dom";
import { useState } from 'react'

function App() {
  const [user, setLoginUser] = useState({})
  const bool = true
  const news = false
  const home = true
  // if(!(user && user._id)){
  //   return(
  //     <div className="App">
  //       <BrowserRouter>
  //         <Routes>
  //           <Route path='/' element={<Login setLoginUser={setLoginUser}/>} />
  //           <Route path='/signup' element={<Signup />} />
  //         </Routes>
  //       </BrowserRouter>

  //     </div>
  //   )
  // }
  // else{
  return (
    <div className="App">
      {/* <StockItem stockName="AAPL"></StockItem> */}
      {/* <Stock></Stock> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header setLoginUser={setLoginUser} />}>
            <Route path="news" element={<News />} />
            <Route path="home" element={<Home />} />
          </Route>
        </Routes>
        <div class="header">

        </div>
        <Home></Home>

      </BrowserRouter>

    </div >
  );
  //}
}

function Header({ setLoginUser }) {
  const navigate = useNavigate()
  return (
    <div>
      <div className="header">
        {/* <Link to="/news">News</Link> */}
        {/* <Link to='news'></Link> */}
        <nav>
          <Link to='news' className="linkStyle">News</Link>
          <Link to='home' className="linkStyle">Home</Link>
          <button className="logout-style" onClick={() => { setLoginUser({}); navigate("/") }}>Logout</button>
        </nav>
      </div>
      <Outlet />
    </div>


  )
}

export default App;
