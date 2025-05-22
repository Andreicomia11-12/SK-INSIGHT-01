import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SKlogo from '../assets/logo.png';
import '../css/educapplication.css';
import EducTable from '../components/eductable';

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

const purokOptions = [
  '',
  'Purok 1',
  'Purok 2',
  'Purok 3',
  'Purok 4',
  'Purok 5',
  'Purok 6',
  'Purok 7',
  'Purok 8',
];

const mockProfilingData = {
  barangay: 'Puting Bato West',
  email: 'juan.delacruz@email.com',
  contact: '09123456789',
  purok: 'Purok 1',
  municipality: 'Calaca',
  province: 'Batangas',
  birthday: '2005-01-01',
  gender: 'Male',
  civilStatus: 'Single',
  education: 'High School Graduate',
  ageGroup: '15-17',
  classification: 'In-school Youth',
  workStatus: 'Student',
  // Add more fields as needed
  documents: [
    { label: 'Sedula', file: 'sedula.pdf' },
    { label: 'Certificate of Registration', file: 'registration.pdf' },
    { label: 'School ID', file: 'school_id.jpg' },
  ]
};

const EducApplication = () => {
  const navigate = useNavigate();
  const [residents, setResidents] = useState(initialResidents);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPurok, setSelectedPurok] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedResident, setSelectedResident] = useState(null);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [rejectedModalOpen, setRejectedModalOpen] = useState(false);

  const filteredResidents = residents.filter(resident => {
    const matchesSearch = Object.values(resident).some(value =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
    const matchesPurok = selectedPurok === '' || resident.purok === selectedPurok;
    return matchesSearch && matchesPurok;
  });

  const handleDownloadList = () => {
    const headers = ['ID', "Resident's Name", 'Age', 'Purok', 'Gender'];
    const csvContent = [
      headers.join(','),
      ...filteredResidents.map(resident =>
        [resident.id, resident.name, resident.age, resident.purok, resident.gender].join(',')
      )
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'educational_assistance_list.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewDetails = (resident) => {
    setSelectedResident(resident);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedResident(null);
  };

  const handleApprove = () => {
    setModalOpen(false);
    setSuccessModalOpen(true);
  };

  const handleReject = () => {
    setModalOpen(false);
    if (selectedResident) {
      setResidents(prev => prev.filter(r => r.id !== selectedResident.id));
    }
    setRejectedModalOpen(true);
  };

  const handleCloseStatusModal = () => {
    setSuccessModalOpen(false);
    setRejectedModalOpen(false);
  };

  return (
    <div className="educapp-dashboard-container">
      <nav className="educapp-dashboard-nav">
        <h3 className='educapp-skb'>SANGGUNIANG KABATAAN</h3>
        <div className="educapp-nav-logo">
          <img src={SKlogo} alt="SK Logo" className="educapp-nav-logo-img" />
          <div className="educapp-logo-text">
            <h3 className='educapp-sko'>SK Official</h3>
            <span className="educapp-adds">Admin</span>
          </div>
        </div>

        <div className="educapp-nav-links">
          <button className={`educapp-nav-link${window.location.pathname === '/dashboard' ? ' educapp-active' : ''}`} onClick={() => navigate('/dashboard')}>Dashboard</button>
          <button className={`educapp-nav-link${window.location.pathname === '/kk-profile' ? ' educapp-active' : ''}`} onClick={() => navigate('/kk-profile')}>KK Profile</button>
          <button className={`educapp-nav-link${window.location.pathname === '/educapplication' ? ' educapp-active' : ''}`} onClick={() => navigate('/educapplication')}>Educational Assistance</button>
        </div>

        <div className="educapp-nav-profile">
          <button onClick={() => navigate('/')} className="educapp-logout-btn">Logout</button>
        </div>
      </nav>
      <main className="educapp-dashboard-main">
        <div className="educapp-dashboard-header">
          <h1>Educational Assistance</h1>
          <p>List of Educational Assistance Applicants</p>
        </div>
        <div className="educapp-search-container">
          <input
            type="text"
            className="educapp-search-input"
            placeholder="Search Resident"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            aria-label="Search Resident"
          />
          <select
            className="educapp-purok-dropdown"
            value={selectedPurok}
            onChange={e => setSelectedPurok(e.target.value)}
          >
            <option value="">All Purok</option>
            {purokOptions.slice(1).map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          <button
            className="educapp-download-list-btn"
            onClick={handleDownloadList}
            style={{ marginLeft: 'auto' }}
            disabled={filteredResidents.length === 0}
          >
            Download List
          </button>
        </div>
        <div className="educapp-table-container">
          <EducTable residents={filteredResidents} onViewDetails={handleViewDetails} />
        </div>
        {modalOpen && selectedResident && (
          <div className="educapp-modal-overlay">
            <div className="educapp-modal">
              <div className="educapp-modal-header">
                <div className="educapp-modal-profile">
                  <img src={SKlogo} alt="avatar" className="educapp-modal-avatar" />
                  <span className="educapp-modal-fullname">{selectedResident.name}</span>
                </div>
                <button className="educapp-modal-print-btn">
                  <i className="fa fa-print"></i> Print
                </button>
              </div>
              <table className="educapp-modal-info-table">
                <tbody>
                  <tr>
                    <th>Name:</th>
                    <td>{selectedResident.name}</td>
                  </tr>
                  <tr>
                    <th>Age:</th>
                    <td>{selectedResident.age}</td>
                  </tr>
                  <tr>
                    <th>Birthday:</th>
                    <td>{mockProfilingData.birthday}</td>
                  </tr>
                  <tr>
                    <th>Place of Birth:</th>
                    <td>{mockProfilingData.barangay}, {mockProfilingData.municipality} {mockProfilingData.province}</td>
                  </tr>
                  <tr>
                    <th>Religion:</th>
                    <td>Catholic</td>
                  </tr>
                  <tr>
                    <th>Gender:</th>
                    <td>{selectedResident.gender}</td>
                  </tr>
                  <tr>
                    <th>Civil Status:</th>
                    <td>{mockProfilingData.civilStatus}</td>
                  </tr>
                  <tr>
                    <th>Contact Number:</th>
                    <td>{mockProfilingData.contact}</td>
                  </tr>
                  <tr>
                    <th>E-mail:</th>
                    <td><a href={`mailto:${mockProfilingData.email}`}>{mockProfilingData.email}</a></td>
                  </tr>
                  <tr>
                    <th>Name of School:</th>
                    <td>Batangas State University - Balayan Campus</td>
                  </tr>
                  <tr>
                    <th>School Address:</th>
                    <td>Caloocan, Balayan, Batangas</td>
                  </tr>
                </tbody>
              </table>
              <div className="educapp-modal-req-title">Requirements:</div>
              <ul className="educapp-modal-req-list">
                {mockProfilingData.documents.map((doc, idx) => (
                  <li className="educapp-modal-req-item" key={idx}>
                    <span className="educapp-modal-req-label">
                      <i className="fa fa-file educapp-modal-req-icon"></i>
                      {doc.label}
                    </span>
                    <span className="educapp-modal-req-file">{doc.file}</span>
                  </li>
                ))}
              </ul>
              <div className="educapp-modal-footer">
                <button className="educapp-modal-btn educapp-modal-btn-reject" onClick={handleReject}>Reject</button>
                <button className="educapp-modal-btn educapp-modal-btn-approve" onClick={handleApprove}>Approve</button>
              </div>
              <button className="educapp-modal-close" onClick={handleCloseModal}>&times;</button>
            </div>
          </div>
        )}
        {successModalOpen && (
          <div className="educapp-status-modal-overlay">
            <div className="educapp-status-modal educapp-status-modal-success">
              <span className="educapp-status-modal-icon">✔️</span>
              <h2>Application Approved!</h2>
              <p>The application has been successfully approved.</p>
              <button className="educapp-status-modal-close" onClick={handleCloseStatusModal}>Close</button>
            </div>
          </div>
        )}
        {rejectedModalOpen && (
          <div className="educapp-status-modal-overlay">
            <div className="educapp-status-modal educapp-status-modal-rejected">
              <span className="educapp-status-modal-icon">❌</span>
              <h2>Application Rejected</h2>
              <p>The application has been rejected.</p>
              <button className="educapp-status-modal-close" onClick={handleCloseStatusModal}>Close</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default EducApplication;
