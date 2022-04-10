import React from "react";
import CryptoItem from "../components/cryptoItem";
import './crypto.css'
import globalCrypto from "../components/globalCrypto";

const crypto = () => {
    const crypto_array = JSON.parse(globalCrypto.JsonCrypto).slice(0,30);
    // const new_array = (crypto_array.sort((a, b) => 0.5 - Math.random())).slice(0, 50);

    return (
        <div id="pageContainer">
            <h1 id="title"> Today's Crypto </h1>
            <ul id="mainContent">
                {crypto_array.map(function (s) {
                    return <li id="item" key={s}><CryptoItem cryptoName={s}></CryptoItem></li>;
                })}
            </ul>
        </div>
    )
}

export default crypto