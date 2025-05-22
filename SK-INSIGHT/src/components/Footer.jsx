import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer className="sk-footer">
            <div className="footer-top">
                <div className="footer-brand">
                    <h2>SK-INSIGHT</h2>
                    <p>Empowering the youth through data-driven governance.</p>
                </div>

                <div className="footer-links">
                    <div>
                        <h4>About</h4>
                        <ul>
                            <li>
                                <Link to="/about-us">Things About US</Link>
                            </li>
                            <li>
                                <Link to="https://en.wikipedia.org/wiki/Sangguniang_Kabataan">Things About SK</Link>
                            </li>
                            <li>
                                <Link to="https://en.wikipedia.org/wiki/Sangguniang_Kabataan">Things About SK-INSIGHT</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4>Follow Us</h4>
                        <ul className="social-links">
                            <li>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <FaFacebook /> Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                    <FaTwitter /> Twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <FaInstagram /> Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} SK-INSIGHT. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
