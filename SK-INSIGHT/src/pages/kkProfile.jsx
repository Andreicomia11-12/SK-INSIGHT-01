import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SKlogo from '../assets/logo.png';
import '../css/kkProfile.css';
import KKTable from '../components/KKTable';

const Dashboard = () => {
  const navigate = useNavigate();

  // Initial resident data (moved from KKTable.jsx)
  const initialResidents = [
    { 
      id: 1, 
      name: 'Juan Dela Cruz', 
      age: 18, 
      purok: 'Purok 1', 
      gender: 'Male',
      workStatus: 'Employed',
      youthAgeGroup: 'Core Youth',
      educationalBackground: 'High School Graduate',
      youthClassification: 'Working Youth',
      civilStatus: 'Single'
    },
    { 
      id: 2, 
      name: 'Maria Santos', 
      age: 20, 
      purok: 'Purok 1', 
      gender: 'Female',
      workStatus: 'Unemployed',
      youthAgeGroup: 'Core Youth',
      educationalBackground: 'College Undergraduate',
      youthClassification: 'In-School Youth',
      civilStatus: 'Single'
    },
    { 
      id: 3, 
      name: 'Pedro Gomez', 
      age: 17, 
      purok: 'Purok 1', 
      gender: 'Male',
      workStatus: 'Self-Employed',
      youthAgeGroup: 'Child Youth',
      educationalBackground: 'High School Undergraduate',
      youthClassification: 'Out-of-School Youth',
      civilStatus: 'Single'
    },
    { 
      id: 4, 
      name: 'Ana Reyes', 
      age: 19, 
      purok: 'Purok 2', 
      gender: 'Female',
      workStatus: 'Currently Looking for a Job',
      youthAgeGroup: 'Core Youth',
      educationalBackground: 'College Undergraduate',
      youthClassification: 'In-School Youth',
      civilStatus: 'Single'
    },
    { 
      id: 5, 
      name: 'Carlos Mendoza', 
      age: 21, 
      purok: 'Purok 2', 
      gender: 'Male',
      workStatus: 'Employed',
      youthAgeGroup: 'Young Youth',
      educationalBackground: 'College Graduate',
      youthClassification: 'Working Youth',
      civilStatus: 'Single'
    },
    { 
      id: 6, 
      name: 'Liza Torres', 
      age: 18, 
      purok: 'Purok 3', 
      gender: 'Female',
      workStatus: 'Not interested in looking for a job',
      youthAgeGroup: 'Core Youth',
      educationalBackground: 'High School Graduate',
      youthClassification: 'Out-of-School Youth',
      civilStatus: 'Single'
    },
    { 
      id: 7, 
      name: 'Miguel Santos', 
      age: 20, 
      purok: 'Purok 3', 
      gender: 'Male',
      workStatus: 'Employed',
      youthAgeGroup: 'Core Youth',
      educationalBackground: 'College Undergraduate',
      youthClassification: 'Working Youth',
      civilStatus: 'Single'
    },
    { 
      id: 8, 
      name: 'Elena Cruz', 
      age: 19, 
      purok: 'Purok 4', 
      gender: 'Female',
      workStatus: 'Unemployed',
      youthAgeGroup: 'Core Youth',
      educationalBackground: 'High School Graduate',
      youthClassification: 'In-School Youth',
      civilStatus: 'Single'
    },
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
    'Youth Age Group': ['Child Youth', 'Core Youth', 'Young Youth'],
    'Educational Background': ['Elementary Undergraduate', 'Elementary Graduate', 'High School Undergraduate', 'High School Graduate', 'College Undergraduate', 'College Graduate'],
    'Youth Classification': ['In-School Youth', 'Out-of-School Youth', 'Working Youth', 'Youth with Specific Needs'],
    'Civil Status': ['Single', 'Married', 'Widowed'],
    'Purok': ['Purok 1', 'Purok 2', 'Purok 3', 'Purok 4', 'Purok 5', 'Purok 6', 'Purok 7', 'Purok 8']
  };

  const handleClassificationChange = (e) => {
    const selected = e.target.value;
    setClassification(selected);
    setGroupOptions(classificationGroups[selected] || []);
    setSelectedGroup('');
    filterResidents(searchTerm, selected, '');
  };

  const handleGroupChange = (e) => {
    const selected = e.target.value;
    setSelectedGroup(selected);
    filterResidents(searchTerm, classification, selected);
  };

  const filterResidents = (search, classification, group) => {
    let filtered = initialResidents;

    // Apply search filter
    if (search) {
      filtered = filtered.filter(resident =>
        Object.values(resident).some(value =>
          String(value).toLowerCase().includes(search.toLowerCase())
        )
      );
    }

    // Apply classification and group filters
    if (classification && group) {
      filtered = filtered.filter(resident => {
        switch (classification) {
          case 'Work Status':
            return resident.workStatus === group;
          case 'Youth Age Group':
            return resident.youthAgeGroup === group;
          case 'Educational Background':
            return resident.educationalBackground === group;
          case 'Youth Classification':
            return resident.youthClassification === group;
          case 'Civil Status':
            return resident.civilStatus === group;
          case 'Purok':
            return resident.purok === group;
          default:
            return true;
        }
      });
    }

    setFilteredResidents(filtered);
  };

  const handleDownloadList = () => {
    // Create a CSV string with headers
    const headers = ['ID', 'Name', 'Age', 'Purok', 'Gender'];
    const csvContent = [
      headers.join(','),
      ...filteredResidents.map(resident => 
        [resident.id, resident.name, resident.age, resident.purok, resident.gender].join(',')
      )
    ].join('\n');

    // Create a blob and download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', 'kk_residents_list.csv');
    link.style.visibility = 'hidden';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    filterResidents(term, classification, selectedGroup);
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
            <select 
              className="kk-classification-dropdown"
              value={classification}
              onChange={handleClassificationChange}
            >
              <option value="">Select Classification</option>
              <option value="Work Status">Work Status</option>
              <option value="Youth Age Group">Youth Age Group</option>
              <option value="Educational Background">Educational Background</option>
              <option value="Youth Classification">Youth Classification</option>
              <option value="Civil Status">Civil Status</option>
              <option value="Purok">Purok</option>
            </select>

            <select 
              className="kk-group-selection-dropdown"
              value={selectedGroup}
              onChange={handleGroupChange}
              disabled={!classification}
            >
              <option value="">Select Group</option>
              {groupOptions.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>

            <button 
              className="kk-download-list-btn"
              onClick={handleDownloadList}
              disabled={filteredResidents.length === 0}
            >
              <i className="fas fa-download"></i>
              Download List
            </button>
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
