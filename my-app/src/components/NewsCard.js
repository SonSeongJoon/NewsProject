// NewsCard.js
import React from 'react';


function NewsCard({ item }) {
    return (
        <li className='mb-5'>
            <h2 className='text-xl font-bold'>{item.title}</h2>
            <p>{item.content}</p>
            <p>뉴스 타입: {item.newstype}</p>
        </li>
    );
}

export default NewsCard;
