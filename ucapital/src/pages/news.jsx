import NewsItem from "../components/newsItem"
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './news.css'

// API from https://github.com/hczhu/TickerTick-API

function News() {
    // store news from api
    const [news, setNews] = useState([])
    // tickers for query to api
    const [tickers, setTickers] = useState("")

    // request if tickers changes
    useEffect(() => {
        axios.get(`https://api.tickertick.com/feed`, {
            // get 100 news articles with tickers
            params: {
                n: 100,
                q: tickers
            }
        })
            .then(res => {
                // set news articles
                const stockNews = res.data;
                setNews(stockNews)
            })

    }, [tickers])

    var newsList;
    // create a news item for each of the items news
    if (news.stories !== undefined) {
        newsList = news.stories.map((item) => {
            return (<NewsItem
                title={item.title}
                image={item.favicon_url}
                description={item.description}
                time={item.time}
            />)
        })
    }

    return (
        // options to set ticker for query to API
        <div>
            <div class="sidenav">
                <h3 onClick={() => setTickers("")}>All</h3>
                <hr></hr>
                <h3 onClick={() => setTickers("(and T:market)")}>Stock Market</h3>
                <hr></hr>
                <h3 onClick={() => setTickers("(and T:fin_news)")}>Financial News</h3>
                <h3 onClick={() => setTickers("(and T:earning)")}>Earnings</h3>
                <h3 onClick={() => setTickers("(and T:sec)")}>SEC Filings</h3>
                <h3 onClick={() => setTickers("(and T:sec_fin)")}>Quarterly/Annual Financial Reports</h3>
                <h3 onClick={() => setTickers("(and T:trade)")}>Trading News</h3>
                <hr></hr>
                <h3 onClick={() => setTickers("(and tt:COIN)")}>Cryptocurrency</h3>
            </div>
            <div className="news-container">
                {newsList}
            </div>
        </div>

    )
}

export default News