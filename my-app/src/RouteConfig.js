import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Category from './pages/Category';

function RouteConfig() {
    return (
        <Routes>
            <Route path="/dashboard" element={<Category category='Dashboard'/>} />
            <Route path="/society" element={<Category category='society'/>}/>
            <Route path="/politics" element={<Category category='politics'/>}/>
            <Route path="/economic" element={<Category category='economic'/>}/>
            <Route path="/finance" element={<Category category='Finance'/>}/>
            <Route path="/entertainment" element={<Category category='Entertainment'/>}/>
        </Routes>
    );
}

export default RouteConfig;