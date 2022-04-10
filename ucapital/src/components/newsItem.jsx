import React, { useState } from 'react'
import './newsItem.css'
import { CloseOutlined } from '@ant-design/icons'
function NewsItem(props) {
    // track whether a news item is open or not
    const [active, setActive] = useState(false);

    // toggle active status
    function toggle() {
        setActive(!active);
    }

    // retrieve date
    const date = new Date(props.time).toString()

    return (
        // class name that changes depending on active status
        <div className={'item' + (active ? "--active" : "")} onClick={toggle}>
            {/* title */}
            <h4 className="title">{props.title}</h4>
            {/* image with inline css */}
            <div className="image-container">
                <img src={props.image} width="150" height="150" alt="article photo" />
            </div>
            {/* news text */}
            <p className={'paragraph' + (active ? "--active" : "")}>{props.description}</p>
            <span className={'date' + (active ? "--active" : "")} >{date}</span>
            {/* x button */}
            <CloseOutlined className={'close' + (active ? "--active" : "")} />
        </div>
    );
}

export default NewsItem