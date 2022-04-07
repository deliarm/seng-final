import React from "react";
import StockItem from "../components/stockItem";
import './stock.css'
import globalStocks from "../components/globalStocks";

const stock = () => {
    const stock_array = JSON.parse(globalStocks.JsonStocks);
    const new_array = stock_array.slice(0,5);
    console.log(stock_array);

    return(
        <ul>
            {new_array.map(function(s){
                return <li key={s}><StockItem stockName={s}></StockItem></li>;
            })}
        </ul>
    )
}

export default stock