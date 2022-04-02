import React, { useState } from 'react'
import './newsItem.css'
import { CloseOutlined } from '@ant-design/icons'
function NewsItem(props) {
    const [active, setActive] = useState(false);

    function toggle() {
        setActive(!active);
    }

    const date = new Date(props.time).toString()


    return (
        <div className={'item' + (active ? "--active" : "")} onClick={toggle}>
            <h4 className="title">{props.title}</h4>
            <div className="image-container">
                <img src={props.image} width="150" height="150" alt="article photo" />
            </div>

            <p className={'paragraph' + (active ? "--active" : "")}>{props.description}</p>
            <span className={'date' + (active ? "--active" : "")} >{date}</span>
            <CloseOutlined className={'close' + (active ? "--active" : "")} />
        </div>
    );
}

export default NewsItem