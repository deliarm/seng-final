import React, {useState} from 'react';
import CryptoItem from "../components/cryptoItem";
import './crypto.css'
import globalCrypto from "../components/globalCrypto";
const crypto_array = JSON.parse(globalCrypto.JsonCrypto);
const new_array = crypto_array.slice(0, 25);

const Crypto = () => {
    const [list,setList] = useState(new_array);
    const [count,setCount] = useState(26);

    function Search(){
        var searched = document.getElementById("search").value.toUpperCase();
        if(searched === ""){
            setList(crypto_array.slice(0,count));
            checkSort();
        }
        if(searched){
            setList([])
            crypto_array.forEach(element => {
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

    function loadCrypto(){
        var addon = crypto_array.slice(count,count+12);
        setList(prevList => [...prevList,...addon]);
        setCount(count+12);
    }

    return (
        <div id="pageContainer">
            <h1 id="title"> Trending Cryptocurrencies </h1>
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
                    return <li id="item" key={s}><CryptoItem cryptoName={s}></CryptoItem></li>;
                })}
            </ul>
            <button onClick={loadCrypto}> load more CryptoCurrencies</button>
        </div>
    )
}

export default Crypto