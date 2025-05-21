// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';

import AdminLogin from './pages/adminLogin';
import Dashboard from './pages/dashboard';
import KKProfile from './pages/kkProfile';
import AssistancePage from './pages/AssistancePage';

import ProfilingPage from './pages/ProfilingPage';

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profiling" element={<ProfilingPage />} />
        <Route path="/assistance" element={<AssistancePage />} /> 

        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/kk-profile" element={<KKProfile />} />

        
      </Routes>
    </Router>
  );
}

export default App;
