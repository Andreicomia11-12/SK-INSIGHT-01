import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SKlogo from '../assets/logo.png';
import '../css/kkProfile.css';
import KKTable from '../components/KKTable';

const Dashboard = () => {
  const navigate = useNavigate();

  // Initial resident data (moved from KKTable.jsx)
  const initialResidents = [
    { id: 1, name: 'Juan Dela Cruz', age: 18, purok: 'Purok 1', gender: 'Male' },
    { id: 2, name: 'Maria Santos', age: 20, purok: 'Purok 1', gender: 'Female' },
    { id: 3, name: 'Pedro Gomez', age: 17, purok: 'Purok 1', gender: 'Male' },
    { id: 4, name: 'Ana Reyes', age: 19, purok: 'Purok 2', gender: 'Female' },
    { id: 5, name: 'Carlos Mendoza', age: 21, purok: 'Purok 2', gender: 'Male' },
    { id: 6, name: 'Liza Torres', age: 18, purok: 'Purok 3', gender: 'Female' },
    { id: 7, name: 'Miguel Santos', age: 20, purok: 'Purok 3', gender: 'Male' },
    { id: 8, name: 'Elena Cruz', age: 19, purok: 'Purok 4', gender: 'Female' },
  ];

  // State for search term and filtered residents
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredResidents, setFilteredResidents] = useState(initialResidents);

  // State for classification and group
  const [classification, setClassification] = useState('');
  const [groupOptions, setGroupOptions] = useState([]);
  const [selectedGroup, setSelectedGroup] = useState('');

  // Classification to Group Options Mapping
  const classificationGroups = {
    'Work Status': ['Employed', 'Unemployed', 'Self-Employed', 'Currently Looking for a Job', 'Not interested in looking for a job'],
    'Educational Background': ['Elementary Undergraduate', 'Elementary Graduate', 'High School Undergraduate', 'High School Graduate', 'College Undergraduate', 'College Graduate'],
    'Youth Age Group': ['Child Youth', 'Core Youth', 'Young Youth'],
    'Youth Classification': ['In-School Youth', 'Out-of-School Youth', 'Working Youth', 'Youth with Specific Needs'],
    'Civil Status': ['Single', 'Married', 'Widowed'],
    'Purok': ['Purok 1', 'Purok 2', 'Purok 3', 'Purok 4']
  };

  const handleClassificationChange = (e) => {
    const selected = e.target.value;
    setClassification(selected);
    setGroupOptions(classificationGroups[selected] || []);
    setSelectedGroup('');
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    // Filter residents based on search term across multiple fields
    const filtered = initialResidents.filter(resident =>
      Object.values(resident).some(value =>
        String(value).toLowerCase().includes(term)
      )
    );
    setFilteredResidents(filtered);
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
        </div>

        <div className="nav-profile">
          <button onClick={() => navigate('/')} className="logout-btn">Logout</button>
        </div>
      </nav>
      
      <main className="dashboard-main">
        <div className="dashboard-header">
          <h1>KK Profile</h1>
          <p>List of KK Residents</p>
        </div>

        <div className="d-flex align-items-center">
          <div className="input-group">  
            <input 
              type="text" 
              className="form-control" 
              placeholder="Search Resident" 
              aria-label="Search Resident"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          

          <div className="filt d-flex ">
            <select className="form-select" value={classification} onChange={handleClassificationChange}>
              <option value="">Filter Classification</option>
              {Object.keys(classificationGroups).map((key, index) => (
                <option key={index} value={key}>{key}</option>
              ))}
            </select>
          </div>

          <div className="group d-flex ">
            <select className="form-select me-2" value={selectedGroup} onChange={(e) => setSelectedGroup(e.target.value)} disabled={!groupOptions.length}>
              <option value="">{groupOptions.length ? 'Select Group' : 'Select Classification First'}</option>
              {groupOptions.map((group, index) => (
                <option key={index} value={group}>{group}</option>
              ))}
            </select>
          </div>
            <div className="d-flex">
              <button className="btn">Download List</button>
            </div>
          </div>

        </div>

        <div className="table-container">
          <KKTable residents={filteredResidents} classification={classification} group={selectedGroup} />
        </div>

      </main>
    </div>
  );
};

export default Dashboard;
