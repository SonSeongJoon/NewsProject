// useFetchNews.js
import { useState, useEffect } from 'react';
import axios from 'axios';
function useFetchNews() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Api 호출을 위한 비동기 함수임.
    useEffect(() => {
        async function fetchNews() {
            try {
                let apiUrl = 'http://localhost:5000/api/news';
                const response = await axios.get(apiUrl);
                setNews(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        }
        fetchNews();
    }, []);

    return { news, loading, error };
}

export default useFetchNews;
