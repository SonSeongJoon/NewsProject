// useFetchNews.js
import { useState, useEffect } from 'react';
import axios from 'axios';
function useFetchNews() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const selectedCategory="apple"


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
    }, [selectedCategory]);

    return { news, loading, error };
}

export default useFetchNews;
