import ChatAppClient from "../components/chatApp/client/src/App2"
import "./home.css"
import { useState } from "react";
import React from 'react'
import StockItem from "../components/stockItem";
import CryptoItem from "../components/cryptoItem"
import globalStocks from "../components/globalStocks";
import globalCrypto from "../components/globalCrypto";


function Home({user}) {
  const stock_array = JSON.parse(globalStocks.JsonStocks);
  const crypto_array = JSON.parse(globalCrypto.JsonCrypto);
  var array = (document.cookie).split(",");
  const [favList,setFavList] = useState(array);
  console.log(favList);

  return (
    <div id="pageContainer">
      <div className="right">
        {/* Chat application was taken and modified from: https://github.com/machadop1407/react-socketio-chat-app */}
        <ChatAppClient user = {user}/>
        {/* <h1>TEST</h1> */}
      </div>
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
    </div>
  )
}

export default Home