import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Category from '../components/Category';
import Dashboard from "../components/Dashboard";
function RouteConfig() {
    const categories = ['society', 'politics', 'economic', 'foreign', 'culture', 'entertain', 'sports', 'digital', 'editorial', 'press', 'botnews'];

    const categoryRoutes = categories.map(category => (
        <Route key={category} path={`/${category}`} element={<Category category={category} />} />
    ));

    return (
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            {categoryRoutes}
        </Routes>
    );
}

export default RouteConfig;
