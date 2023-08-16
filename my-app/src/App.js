import React from 'react';
import Layout from "./components/Layout";
import NewsCard from "./components/NewsCard";
import RouteConfig from "./RouteConfig";
import useFetchNews from '../src/api/useFetchNews';

function App() {
    return (
        <Layout>
            <RouteConfig />
        </Layout>
    );
}
export default App;
