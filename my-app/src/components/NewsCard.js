import React from 'react';

function NewsCard({ item }) {
    const { title, press, date, content, url, image } = item;

    return (
        <div className='flex items-center border-t'>
            <div className='mb-5 p-1 w-5/6 mr-4'>
                <p className='text-sm text-gray-700'>{date}</p>
                <a href={url} target="_blank" rel="noopener noreferrer" className='flex items-center hover:no-underline hover:text-gray-600'>
                    <h2 className='text-lg font-bold'>{title}</h2>
                </a>

                <a href={url} className="text-sm text-gray-900 hover:underline">{content}</a>
                <p className='text-xs text-gray-600'>{'#'}{press}</p>
            </div>
            <div>

                {image ? <img src={image} alt="" className='w-32 h-32 mr-2'/> : null}
            </div>
        </div>



    );
}

export default NewsCard;
