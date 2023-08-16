import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Category from './pages/Category';

function RouteConfig() {
    return (
        <Routes>
            <Route path="/dashboard" element={<Category category='Dashboard'/>} />
            <Route path="/technology" element={<Category category='Technology'/>}/>
            <Route path="/health" element={<Category category='Health'/>}/>
            <Route path="/sports" element={<Category category='Sports'/>}/>
            <Route path="/finance" element={<Category category='Finance'/>}/>
            <Route path="/entertainment" element={<Category category='Entertainment'/>}/>
        </Routes>
    );
}

export default RouteConfig;