import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import '../css/LoginPage.css'; 
import SKlogo from '../assets/logo.png'; 

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    

    <div className="login-container">
      <div className="login-left">
        <img src={SKlogo} alt="Logo" className="login-logo" />
        <h2>SANGGUNIANG KABATAAN BARANGAY<br />PUTING BATO WEST</h2>
      </div>
      <div className="login-right">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2 className='admin-login'>Admin Login</h2>
          <div className="input-group1">
            <FaUser className="input-icon" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group1">
            <FaLock className="input-icon" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <span
              className="input-icon eye-icon"
              onClick={() => setShowPassword((prev) => !prev)}
              style={{ cursor: 'pointer' }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <button type="submit" className="login-btn">Log in</button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;