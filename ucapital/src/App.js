import News from "./pages/news";
import Stock from "./pages/stock";
import StockItem from "./components/stockItem";
import './App.css'
import { BrowserRouter, Route, Routes, Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <StockItem stockName="AAPL"></StockItem> */}
      <Stock></Stock>
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
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
      <div class="header">
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
