import React from "react";
import useFetchNews from "../api/useFetchNews";
import NewsCard from "./NewsCard";

const GetNews = ({ category }) => {
    const { news, loading, error } = useFetchNews();

    const filteredNews = news.filter(item => item.newstype === category);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
                <ul>
                    <h1 className='sticky pb-1 top-0 bg-white text-3xl font-bold mb-3 text-gray-500'>{category}</h1>
                    {filteredNews.map(item => (
                        <NewsCard key={item.id} item={item}/>
                    ))}
                </ul>
        </div>
    );
}

export default GetNews;
