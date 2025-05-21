// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import AssistancePage from './pages/AssistancePage';

import ProfilingPage from './pages/ProfilingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/profiling" element={<ProfilingPage />} />
        <Route path="/assistance" element={<AssistancePage />} /> {/* new route */}
      </Routes>
    </Router>
  );
}

export default App;
