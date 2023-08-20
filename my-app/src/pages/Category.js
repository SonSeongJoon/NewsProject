import React from "react";
import useFetchNews from "../api/useFetchNews";
import NewsCard from "../components/NewsCard";

const Category = ({ category }) => {
    const { news, loading, error } = useFetchNews(category);

    const filteredNews = news.filter(item => item.newstype === category);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1 className='sticky top-0 bg-white text-3xl font-bold mb-5 text-gray-500'>{category}</h1>
            {filteredNews.length === 0 ? (
                <p>News not available for this category.</p>
            ) : (
                <ul>
                    {filteredNews.map(item => (
                        <NewsCard key={item.id} item={item}/>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Category;
