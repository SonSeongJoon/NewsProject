import React, { useState } from "react";
import useFetchNews from "../api/useFetchNews";
import NewsCard from "../components/NewsCard";
const category = 'Dashboard'
const Dashboard = () => {
    const { news, loading, error } = useFetchNews(category); // 선택된 카테고리에 해당하는 뉴스 불러오기

        const filteredNews = news.filter(item => item.newstype === category)


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1 className='text-3xl font-bold mb-5 text-gray-500'>Dashboard</h1>
            <ul>
                {filteredNews.map(item => (
                    <NewsCard key={item.id} item={item} type={item.newstype}/>
                ))}
            </ul>
        </div>
    )
}

export default Dashboard;
