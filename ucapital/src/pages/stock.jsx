import React from "react";
import StockItem from "../components/stockItem";
import './stock.css'
import globalStocks from "../components/globalStocks";

const stock = () => {
    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }
    const stock_array = JSON.parse(globalStocks.JsonStocks);
    const new_array = (stock_array.sort((a, b) => 0.5 - Math.random())).slice(0, 5);

    return (
        <div id="pageContainer">
            <h1 id="title"> Today's Stocks </h1>
            <ul id="mainContent">
                {new_array.map(function (s) {
                    return <li id="item" key={s}><StockItem stockName={s}></StockItem></li>;
                })}
            </ul>
        </div>
    )
}

export default stock