import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/ProfilePage.css';
import { FaCheckCircle, FaSignOutAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import avatarImage from '../assets/ProfileImage.jpg';
import Footer from '../components/Footer';

const ProfilePage = () => {
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate(); // For redirecting to login

  const user = {
    username: 'Karrie123',
    email: 'Karrie@gmail.com',
    civilStatus: 'Single',
    fullName: 'Karrie Delos Reyes',
    birthdate: 'March 5, 2001',
    contactNumber: '+63 999 888 7777',
    address: '456 Brgy. Maligaya, Makati City',
    gender: 'Male',
    age: 24,
    youthClassification: 'In-school youth',
    purok: 'Purok 5',
    avatarUrl: avatarImage,
    isVerified: false
  };

  const handleVerifySubmit = (e) => {
    e.preventDefault();
    setShowVerifyModal(false);
    setShowSuccessModal(true);
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <>
      <Navbar />
      <div className="profile-page">
        <div className="profile-wrapper">
          <h2 className="profile-title">User Profile</h2>

          <div className="profile-card">
            <div className="profile-avatar-container">
              <img src={user.avatarUrl} alt="Avatar" className="profile-avatar" />
            </div>

            <div className="profile-user-info">
              <h3 className="profile-username">{user.username}</h3>
              <p className="profile-email">{user.email}</p>
              <p className={`profile-verification ${user.isVerified ? 'verified' : 'not-verified'}`}>
                {user.isVerified ? (
                  <>
                    <FaCheckCircle className="icon" /> Verified
                  </>
                ) : (
                  <>
                    Not Verified <FaCheckCircle className="icon not" />
                  </>
                )}
              </p>
            </div>

            <div className="profile-details-grid">
              <div className="profile-field">
                <label>Full Name</label>
                <div className="field-value">{user.fullName}</div>
              </div>
              <div className="profile-field">
                <label>Gender</label>
                <div className="field-value">{user.gender}</div>
              </div>
              <div className="profile-field">
                <label>Age</label>
                <div className="field-value">{user.age}</div>
              </div>
              <div className="profile-field full">
                <label>Youth Classification</label>
                <div className="field-value">{user.youthClassification}</div>
              </div>
              <div className="profile-field full">
                <label>Civil Status</label>
                <div className="field-value">{user.civilStatus}</div>
              </div>
              <div className="profile-field full">
                <label>Purok</label>
                <div className="field-value">{user.purok}</div>
              </div>
            </div>

            <div className="profile-actions">
              {!user.isVerified && (
                <button className="btn btn-verify" onClick={() => setShowVerifyModal(true)}>
                  Verify Account
                </button>
              )}
              <button className="btn btn-logout" onClick={handleLogout}>
                <FaSignOutAlt /> Log Out
              </button>
            </div>
          </div>
        </div>
      </div>

      {showVerifyModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Verify Your Identity</h3>
            <form onSubmit={handleVerifySubmit}>
              <label>Email Address</label>
              <input type="email" value={user.email} disabled />

              <label>Upload Document (e.g., Barangay ID)</label>
              <input type="file" required />

              <div className="modal-actions">
                <button type="button" className="btn btn-cancel" onClick={() => setShowVerifyModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn btn-submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showSuccessModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Successfully Submitted</h3>
            <p>Please wait for confirmation from your barangay representative.</p>
            <div className="modal-center-button">
              <button className="btn btn-submit" onClick={() => setShowSuccessModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default ProfilePage;
