import React from 'react';
import Navbar from '../components/Navbar';
import '../css/AboutPage.css';
import AboutImage from '../assets/logo.png';
import Footer from '../components/Footer';
const AboutPage = () => {
    return (
        <>
            <Navbar />
            <div className="about-container">
                <section className="about-hero">
                    <div className="about-image">
                        <img src={AboutImage} alt="SK Community Engagement" />
                    </div>
                    <div className="about-content">
                        <h1 className="about-title">About SK Insight</h1>
                        <p className="about-description">
                            SK Insight is a digital platform developed to empower the Sangguniang Kabataan (SK) councils by providing smart analytics, centralized data collection, and streamlined community engagement tools.
                        </p>
                        <p className="about-description">
                            Our goal is to promote transparency, improve public service, and enable data-driven decision making, especially in tracking youth assistance, profiling, and community program effectiveness.
                        </p>
                        <p className="about-description">
                            The Sangguniang Kabataan (SK) is the youth council of every barangay. It serves as the voice of young people in governance, encouraging civic engagement and leadership development among the youth.
                        </p>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default AboutPage;
