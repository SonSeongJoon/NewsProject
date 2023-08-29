import React from 'react';
import {Route, Routes} from 'react-router-dom';
import GetNews from '../components/GetNews';
import Dashboard from "../components/Dashboard";
import {categories} from "../components/Categories";

function RouteConfig() {
    const categoryRoutes = categories.map(category => (
        <Route key={category} path={`/${category}`} element={<GetNews category={category}/>}/>
    ));

    return (
        <Routes>
            <Route path='/' element={<Dashboard/>}/>
            {categoryRoutes}
        </Routes>
    );
}

export default RouteConfig;
