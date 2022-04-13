import ChatAppClient from "../components/chatApp/client/src/App"
import "./home.css"
import { useState } from "react";
import React from 'react'
import StockItem from "../components/stockItem";
import CryptoItem from "../components/cryptoItem"
import globalStocks from "../components/globalStocks";
import globalCrypto from "../components/globalCrypto";
import {Container } from "react-bootstrap";


function Home({user}) {
  const stock_array = JSON.parse(globalStocks.JsonStocks);
  const crypto_array = JSON.parse(globalCrypto.JsonCrypto);
  var array = (document.cookie).split(",");
  const [favList,setFavList] = useState(array);
  console.log(favList);

  return (
    <div id="pageContainer">
      <div className="left">
        <h1>Favorites</h1>
        <ul id="mainContent">
                {favList.map(function (s) {
                  if(s.length >= 1){
                    if(crypto_array.includes(s)){
                      return <li id="item" key={s}><CryptoItem cryptoName={s}></CryptoItem></li>;
                    }
                    else{
                      return <li id="item" key={s}><StockItem stockName={s}></StockItem></li>;
                    }
                  }
                })}
            </ul>
      </div>
      <div className="right">
        {/* Chat application was taken and modified from: https://github.com/machadop1407/react-socketio-chat-app */}
        <ChatAppClient user = {user}/>
      </div>
    </div>
  )
}

export default Home