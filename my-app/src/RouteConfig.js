import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardView from '../src/pages/Dashboard';
import TechnologyView from '../src/pages/Technology';
import HealthView from '../src/pages/Health';
import SportsView from '../src/pages/Sports';
import FinanceView from '../src/pages/Finance';
import EntertainmentView from '../src/pages/Entertainment';
// ... 다른 뷰들도 임포트 ...

function RouteConfig() {
    return (
        <Routes>
            <Route path="/dashboard" element={<DashboardView />} />
            <Route path="/technology" element={<TechnologyView />} />
            <Route path="/health" element={<HealthView/>} />
            <Route path="/sports" element={<SportsView />} />
            <Route path="/finance" element={<FinanceView />} />
            <Route path="/entertainment" element={<EntertainmentView />} />
        </Routes>
    );
}

export default RouteConfig;