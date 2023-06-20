import React from 'react';
import { Routes, Route, Link, Outlet, useMatch } from 'react-router-dom';
import Profile from '../../components/dashboard/Profile';
// import Settings from './Settings';
import Sidebar from '../../components/dashboard/Sidebar';
import DashBoard from '../../components/dashboard/DashBoard';
import Settings from '../../components/dashboard/Setting';

const UserDashboard = () => {

  return (
    <div className='flex'>
        <Sidebar />
      <div>
        <Outlet /> {/* Renders the child routes */}
      </div>
    </div>
  );
};

const DashboardRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<UserDashboard />}>
          {/* Nested Routes */}
          <Route path="/" element={<DashBoard />} />
          <Route path="myprofile" element={<Profile />} />
          <Route path="setting" element={<Settings />} />
        </Route>
      </Routes>
    );
  };

export default DashboardRoutes;
