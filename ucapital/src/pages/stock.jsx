import React , {useState} from "react";
import StockItem from "../components/stockItem";
import './stock.css'
import globalStocks from "../components/globalStocks";
import Cookies from 'universal-cookie';
const stock_array = JSON.parse(globalStocks.JsonStocks);
const new_array = (stock_array).slice(0, 26);

const Stock = (props) => {
    const [list,setList] = useState(new_array);
    const [count,setCount] = useState(26);
    function Search(){
        var searched = document.getElementById("search").value.toUpperCase();
        if(searched === ""){
            setList(stock_array.slice(0,count));
            checkSort();
        }
        if(searched){
            setList([])
            stock_array.forEach(element => {
                if(element.includes(searched)){
                    setList(prevList => [...prevList, element])
                }
            });
            document.getElementById("search").value="";
            document.getElementById("dropDown").selectedIndex = 0;
        }        
    }

    function checkSort(){
        var sortMethod = document.getElementById("dropDown");
        var selected = sortMethod.options[sortMethod.selectedIndex].innerHTML;
        if(selected === "Alphabetical A-Z"){
            var temp = list.sort();
            setList([...temp])
        }
        else{
            var reverse = (list.sort()).reverse()
            setList([...reverse])
        }
    }

    function loadStocks(){
        var addon = stock_array.slice(count,count+12);
        setList(prevList => [...prevList,...addon]);
        setCount(count+12);
    }

    return (
        <div id="pageContainer">
            <h1 id="title"> Today's Stocks </h1>
            <div id="menu">
                <select id="dropDown">
                    <option value="alphabetical" >Alphabetical A-Z</option>
                    <option value="reverse">Reverse Alphabetical Z-A</option>
                </select>
                <input id="search" type="text" placeholder="Search"/>
                <button onClick={() => Search()}>Enter</button>
            </div>
            <ul id="mainContent">
                {list.map(function (s) {
                    return <li id="item" key={s}><StockItem stockName={s}></StockItem></li>;
                })}
            </ul>
            <button id="loadMore" onClick={loadStocks}> load more Stocks</button>
        </div>
    )
}

export default Stock