import React, { useState } from 'react';
import '../css/AdminAnnouncementPage.css';
import '../css/Dashboard.css';
import AdminAnnouncementTable from '../components/AdminAnnouncementTable';
import SKlogo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const AdminAnnouncementPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [announcements, setAnnouncements] = useState([
    { id: 1, time: '2025-01-14 08:45', subject: 'General', title: 'Welcome to the new year!', body: 'Happy New Year to all SK members.' },
  ]);
  const [form, setForm] = useState({ title: '', time: '', body: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.time || !form.body) {
      setError('All fields are required.');
      return;
    }
    setAnnouncements([
      ...announcements,
      {
        id: Date.now(),
        time: form.time,
        subject: 'General', // You can add a subject field if needed
        title: form.title,
        body: form.body,
      },
    ]);
    setForm({ title: '', time: '', body: '' });
    setError('');
    setShowModal(false);
  };

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <h3 className='skb'>SANGGUNIANG KABATAAN</h3>
        <div className="nav-logo">
          <img src={SKlogo} alt="SK Logo" className="nav-logo-img" />
          <div className="logo-text">
            <h3 className='sko'>SK Official</h3>
            <span className="adds">Admin</span>
          </div>
        </div>
        <div className="nav-links">
          <button className={`nav-link${window.location.pathname === '/dashboard' ? ' active' : ''}`} onClick={() => navigate('/dashboard')}>Dashboard</button>
          <button className={`nav-link${window.location.pathname === '/kk-profile' ? ' active' : ''}`} onClick={() => navigate('/kk-profile')}>KK Profile</button>
          <button className={`nav-link${window.location.pathname === '/educapplication' ? ' active' : ''}`} onClick={() => navigate('/educapplication')}>Educational Assistance</button>
          <button className={`nav-link${window.location.pathname === '/admin/announcements' ? ' active' : ''}`} onClick={() => navigate('/admin/announcements')}>Announcements</button>
        </div>
        <div className="nav-profile">
          <button onClick={() => navigate('/')} className="logout-btn">Logout</button>
        </div>
      </nav>
      <main className="dashboard-main">
        <div className="admin-announcement-header-row">
          <div>
            <h2 className="admin-announcement-title">Announcements</h2>
            <p className='listss'>List of Announcements</p>
          </div>
          <button className="admin-announcement-create-btn" onClick={() => setShowModal(true)}>
            + Create Announcement
          </button>
        </div>
        <AdminAnnouncementTable announcements={announcements} />
        {showModal && (
          <div className="admin-announcement-modal-overlay">
            <div className="admin-announcement-modal" onClick={e => e.stopPropagation()}>
              <h3>Create Announcement</h3>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '12px' }}>
                  <label htmlFor="title">Title:</label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={form.title}
                    onChange={handleInputChange}
                    className="admin-announcement-input"
                    placeholder="Enter announcement title"
                  />
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <label htmlFor="time">Time:</label>
                  <input
                    type="text"
                    id="time"
                    name="time"
                    value={form.time}
                    onChange={handleInputChange}
                    className="admin-announcement-input"
                    placeholder="YYYY-MM-DD HH:MM"
                  />
                </div>
                <div style={{ marginBottom: '12px' }}>
                  <label htmlFor="body">Details:</label>
                  <br />
                  <textarea
                    id="body"
                    name="body"
                    value={form.body}
                    onChange={handleInputChange}
                    className="admin-announcement-input"
                    placeholder="Enter announcement description"
                    style={{ width: '100%', minHeight: '200px', resize: 'vertical' }}
                  />
                </div>
                {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}
                <button type="submit" className="admin-announcement-create-btn" style={{ width: '100%' }}>
                  Add Announcement
                </button>
                <button type="button" className="admin-announcement-close-btn" style={{ width: '100%', marginTop: 8 }} onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminAnnouncementPage; 