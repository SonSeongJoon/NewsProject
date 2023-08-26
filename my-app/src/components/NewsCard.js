import React from 'react';

function NewsCard({ item }) {
    const { title, press, date, content, url, image } = item;

    return (
        <div className='flex items-center border-t-2 '>
            <div className='mb-5 p-1 w-5/6 mr-4'>
                <p className='text-sm text-gray-700'>{date}</p>
                <div className='flex items-center'>
                    <h2 className='text-lg font-bold'>{title}</h2>
                </div>
                <p className='text-sm text-gray-900 mb-1'>{content}</p>
                <p className='text-xs text-gray-600'>{'#'}{press}</p>
            </div>
            <div>
                <img src='' alt='뉴스 이미지' className='w-32 h-32 bg-gray-300 mr-2'/>
            </div>
        </div>



    );
}

export default NewsCard;
