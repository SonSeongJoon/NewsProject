// NewsCard.js
import React from 'react';


function NewsCard({ item }) {
    return (
        <li className='mb-5'>
            <div className='flex'>
                <h2 className='text-xl font-bold mr-4'>{item.title}</h2>
                <p className='text-sm text-gray-500'>{item.press}</p>
            </div>
            <p>{item.content}</p>

        </li>
    );
}

export default NewsCard;
