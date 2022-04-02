import NewsItem from "../components/newsItem"
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './news.css'

// API from https://github.com/hczhu/TickerTick-API


function News(props) {
    const [news, setNews] = useState([])
    const [selectedTags, setSelectedTags] = useState([])
    const [tickers, setTickers] = useState("")
    function pushTag(tag) {
        const tempArray = [];
        tempArray.push(tag)
        setSelectedTags(tempArray)
    }
    useEffect(() => {
        axios.get(`https://api.tickertick.com/feed`, {
            params: {
                n: 100,
                q: tickers
            }
        })
            .then(res => {
                const stockNews = res.data;
                setNews(stockNews)
            })

    }, [tickers])
    console.log(news.stories)
    var newsList;
    const tagList = [];
    if (news.stories != undefined) {
        newsList = news.stories.map((item) => {
            // for (let i = 0; i < item.tags.length; i++) {
            //     if (!tagList.includes(item.tags[i])) {
            //         tagList.push(item.tags[i])
            //     }
            // }
            tagList.sort();
            return (<NewsItem
                title={item.title}
                image={item.favicon_url}
                description={item.description}
                time={item.time}
            />)
        })
    }

    // const sidebarOptions = tagList.map((tag) => {
    //     return (
    //         <h3 onClick={() => pushTag(tag)}>{tag}</h3>
    //     )
    // })

    // console.log(tagList)
    // console.log(news)
    console.log(selectedTags)

    return (
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