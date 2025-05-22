// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AssistancePage from './pages/AssistancePage';
import ProfilingPage from './pages/ProfilingPage';
import ProfilePage from './pages/ProfilePage';
import AnnouncementPage from './pages/AnnouncementPage';

import AdminLogin from './pages/adminLogin';
import Dashboard from './pages/dashboard';
import KKProfile from './pages/kkProfile';
import Educapplication from './pages/educapplication';
import AboutUsPage from './pages/AboutUsPage';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profiling" element={<ProfilingPage />} />
        <Route path="/assistance" element={<AssistancePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/announcements" element={<AnnouncementPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />


        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/kk-profile" element={<KKProfile />} />
        <Route path="/educapplication" element={<Educapplication />} />
      </Routes>
    </Router>
  );
}

export default App;

