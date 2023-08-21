import React from 'react';

function NewsCard({ item }) {
    const { title, press, date, content } = item;

    return (
        <div className='mb-5'>
            <div className='flex items-center'>
                <h2 className='text-xl font-bold mr-4'>{title}</h2>
                <p className='text-sm text-gray-500 mr-4'>{press}</p>
                <p className='text-sm text-gray-500'>{date}</p>
            </div>
            <p>{content}</p>
        </div>


    );
}

export default NewsCard;
