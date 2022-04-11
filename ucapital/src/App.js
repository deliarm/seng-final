import News from "./pages/news";
import StockItem from "./components/stockItem";
import Login from './pages/loginpage'
import Signup from './pages/signuppage'
import Stock from "./pages/stock";
import Crypto from './pages/crypto'
import Cookies from 'universal-cookie';
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
        <BrowserRouter>
        <Routes>
          <Route path="/"  element={<Header />}>
          <Route path="/" element={<Home user = {user} />} />
          <Route path="home" element={<Home user = {user} />} />
          <Route path="news" element={<News />} />
          <Route path="stock" element={<Stock />} />
          <Route path="crypto" element={<Crypto />} />
          </Route>
          
        </Routes>
        {/* <div class="header">
          <Route path="news" element={<News />} />

        </div> */}

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
          <Link to='stock' className="linkStyle">Stocks</Link>
          <Link to='crypto' className="linkStyle">Crypto</Link>
        </nav>
      </div>
      <Outlet />
    </div>


  )
}

export default App;
