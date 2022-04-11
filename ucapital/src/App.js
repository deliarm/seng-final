import News from "./pages/news";
import Stock from "./pages/stock";
import StockItem from "./components/stockItem";
import Login from './pages/loginpage'
import Signup from './pages/signuppage'
import './App.css'
import Home from '../src/pages/home'
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";
import { useState } from 'react'

function App() {
  const [user, setLoginUser] = useState({})
  const bool = true
  if (!(user && user._id)) {
    return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login setLoginUser={setLoginUser} />} />
            <Route path='/signup' element={<Signup />} />
          </Routes>
        </BrowserRouter>

      </div>
    )
  }
  else {
    return (
      <div className="App">
        {/* <StockItem stockName="AAPL"></StockItem> */}
        {/* <Stock></Stock> */}
        <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Header />}>
          <Route path="home" element={<Home user = {user} />} />
          <Route path="news" element={<News />} />
          </Route>
        </Routes>
        {/* <div class="header">
          <Route path="news" element={<News />} />

        </div> */}
        <Home></Home>

        </BrowserRouter>

      </div >
    );
  }
}

function Header() {
  return (
    <div>
      <div className="header">
        {/* <Link to="/news">News</Link> */}
        {/* <Link to='news'></Link> */}
        <nav>
          <Link to='news' className="linkStyle">News</Link>
          <Link to='home' className="linkStyle">Home</Link>
        </nav>
      </div>
      <Outlet />
    </div>


  )
}

export default App;
