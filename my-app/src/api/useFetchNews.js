// useFetchNews.js
import { useState, useEffect } from 'react';
import axios from 'axios';
function useFetchNews(category) {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);  // 추가


    useEffect(() => {
        async function fetchNews() {
            try {
                let apiUrl = 'http://localhost:5000/api/news';
                if (selectedCategory) {
                    apiUrl += `?category=${selectedCategory}`;
                }
                const response = await axios.get(apiUrl);
                setNews(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        }

        fetchNews();
    }, [selectedCategory]);  // selectedCategory 변경될 때마다 뉴스를 다시 불러옵니다.

    return { news, loading, error };
}

export default useFetchNews;
