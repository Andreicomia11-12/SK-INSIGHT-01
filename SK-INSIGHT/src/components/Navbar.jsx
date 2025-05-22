import React, { useState, useEffect } from 'react';
import { FaUser, FaBell, FaBars, FaTimes } from 'react-icons/fa';
import SKlogo from '../assets/logo.png';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Auto-close menu on window resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) {
                setMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <nav className="navbar">

            <div className="navbar-left"><Link to="/home">
                <img src={SKlogo} alt="SK Logo" className="navbar-logo" />
            </Link>
                <span className="navbar-title" onClick={() => setMenuOpen(false)}><Link className='navbar-title' to="/home">SK-INSIGHT</Link></span>
            </div>

            {/* Center: Hamburger & Links */}
            <div className="navbar-center">
                <div className="navbar-hamburger" onClick={() => setMenuOpen(prev => !prev)}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    <li onClick={() => setMenuOpen(false)}><Link to="/home">Home</Link></li>
                    <li onClick={() => setMenuOpen(false)}><Link to="/profiling">Profiling</Link></li>
                    <li onClick={() => setMenuOpen(false)}><Link to="/assistance">Assistance</Link></li>
                </ul>

            </div>

            {/* Right: Icons */}
            <div className="navbar-icons">
                <Link to="/profile" className="navbar-icon-link1">
                    <FaUser className="navbar-icon" />
                </Link>
                <Link to="/announcements" className="navbar-icon-link1">
                    <FaBell className="navbar-icon" />
                </Link>

            </div>
        </nav>
    );
};

export default Navbar;
