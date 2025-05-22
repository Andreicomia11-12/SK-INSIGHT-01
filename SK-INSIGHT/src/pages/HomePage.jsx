// src/pages/HomePage.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/HomePage.css';
import { useNavigate } from 'react-router-dom';
import HeroImage from '../assets/SK.webp';

const HomePage = () => {
    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className="homepage-container">
                <section className="hero-modern">
                    <span className="badge">SK INSIGHT PLATFORM</span>

                    <div className="hero-image">
                        <img src={HeroImage} alt="SK Insight Team at Work" />
                    </div>

                    <div className="hero-info">
                        <h1 className="main-heading">
                            Advanced analytics to grow your barangay programs
                        </h1>
                        <p className="sub-text">
                            Empowering the youth through community involvement, transparency, and smart tracking of educational assistance and profiling.
                        </p>
                    </div>

                    <div className="buttons">
                        <button className="btn btn-primary" onClick={() => navigate('/profile')}>Get Started</button>
                        <button className="btn btn-secondary" onClick={() => navigate('/about-us')}>How it works</button>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;
