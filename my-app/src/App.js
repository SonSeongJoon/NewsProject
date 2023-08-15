import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from "./components/Layout";

function App() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchNews() {
            try {
                const response = await axios.get('http://localhost:5000/api/news');
                setNews(response.data);
                setLoading(false);
            } catch (err) {
                setError(err.message);
                setLoading(false);
            }
        }

        fetchNews();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
            <Layout>
                <ul>
                    {news.map(item => (
                        <li className='mb-5' key={item.id}>
                            <h2 className='text-2xl font-bold'>{item.title}</h2>
                            <p>{item.content}</p>
                        </li>
                    ))}
                </ul>
            </Layout>
    );
}

export default App;
