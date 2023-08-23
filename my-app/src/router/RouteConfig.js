import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Category from '../components/Category';
import Dashboard from '../components/Dashboard';

function RouteConfig() {
    return (
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/society" element={<Category category='society' />} />
            <Route path="/politics" element={<Category category='politics' />} />
            <Route path="/economic" element={<Category category='economic' />} />
            <Route path="/foreign" element={<Category category='foreign' />} />
        </Routes>
    );
}

export default RouteConfig;
