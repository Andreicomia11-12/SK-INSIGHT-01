// src/pages/HomePage.js
import React from 'react';
import Navbar from '../components/Navbar';
import SKlogo from '../assets/logo.png';
import '../css/HomePage.css';

const HomePage = () => (
    <div>
        <Navbar />
        <div className="hero-section">
            <div className="hero-header">
                <img src={SKlogo} alt="SK Logo" className="hero-logo" />
                <div className="hero-sshee">
                    <h1>
                        <span className="hero-title-bold">SANGGUNIANG KABATAAN</span>
                        <br />
                        <span className="hero-title-sub">BARANGAY PUTING BATO WEST</span>
                    </h1>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;
