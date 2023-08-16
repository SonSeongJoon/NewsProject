import React from "react";
import useFetchNews from "../api/useFetchNews";
import NewsCard from "../components/NewsCard";

const Dashboard = ({ category }) => {
    const { news, loading, error } = useFetchNews(category);

    const filteredNews = news.filter(item => item.newstype === category);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1 className='text-3xl font-bold mb-5 text-gray-500'>{category}</h1>
            <ul>
                {filteredNews.map(item => (
                    <NewsCard key={item.id} item={item} type={item.newstype} />
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
