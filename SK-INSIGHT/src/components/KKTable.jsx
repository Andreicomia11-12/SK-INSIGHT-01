import React, { useState } from 'react';
import '../css/kkProfile.css';

const KKTable = ({ residents, onViewDetails }) => {
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedResident, setSelectedResident] = useState(null);

  // Mock data for demonstration - in a real app, this would come from your backend
  const mockResidentDetails = {
    barangay: 'Puting Bato West',
    email: 'juan.delacruz@email.com',
    contactNo: '09123456789',
    municipality: 'Calaca',
    province: 'Batangas',
    birthday: '2005-01-01',
    civilStatus: 'Single',
    educationalBackground: 'High School Graduate',
    youthAgeGroup: 'Core Youth',
    youthClassification: 'In-school Youth',
    workStatus: 'Employed'
  };

  const handleViewDetails = (resident) => {
    // Merge the resident data with mock details
    const fullResidentDetails = {
      ...resident,
      ...mockResidentDetails
    };
    setSelectedResident(fullResidentDetails);
    setShowDetailsModal(true);
  };

  return (
    <>
      <div className="table-responsive" style={{ display: 'flex', justifyContent: 'center', paddingRight: 0, marginRight: 0 }}>
        <table className="table table-striped table-hover">
          <thead className="table-light">
            <tr>
              <th className='kkhead'>#</th>
              <th className='kkhead'>Resident's Name</th>
              <th className='kkhead'>Age</th>
              <th className='kkhead'>Purok</th>
              <th className='kkhead'>Gender</th>
              <th className='kkhead'>Action</th>
            </tr>
          </thead>
          <tbody>
            {residents.map((resident) => (
              <tr key={resident.id}>
                <th scope="row">{resident.id}</th>
                <td>{resident.name}</td>
                <td>{resident.age}</td>
                <td>{resident.purok}</td>
                <td>{resident.gender}</td>
                <td className="act">
                  <button className="educapp-view-details-btn" onClick={() => handleViewDetails(resident)}>
                    View Full Details {'>>'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {showDetailsModal && selectedResident && (
        <div className="modal-overlay">
          <div className="modal resident-modal">
            <h3>Resident Profile Details</h3>
            <div className="resident-details-grid">
              <div className="detail-field">
                <label>Full Name:</label>
                <div className="field-value">{selectedResident.name}</div>
              </div>
              <div className="detail-field">
                <label>Age:</label>
                <div className="field-value">{selectedResident.age}</div>
              </div>
              <div className="detail-field">
                <label>Barangay:</label>
                <div className="field-value">{selectedResident.barangay}</div>
              </div>
              <div className="detail-field">
                <label>Email:</label>
                <div className="field-value">{selectedResident.email}</div>
              </div>
              <div className="detail-field">
                <label>Contact No.:</label>
                <div className="field-value">{selectedResident.contactNo}</div>
              </div>
              <div className="detail-field">
                <label>Purok:</label>
                <div className="field-value">{selectedResident.purok}</div>
              </div>
              <div className="detail-field">
                <label>Municipality:</label>
                <div className="field-value">{selectedResident.municipality}</div>
              </div>
              <div className="detail-field">
                <label>Province:</label>
                <div className="field-value">{selectedResident.province}</div>
              </div>
              <div className="detail-field">
                <label>Birthday:</label>
                <div className="field-value">{selectedResident.birthday}</div>
              </div>
              <div className="detail-field">
                <label>Gender:</label>
                <div className="field-value">{selectedResident.gender}</div>
              </div>
              <div className="detail-field">
                <label>Civil Status:</label>
                <div className="field-value">{selectedResident.civilStatus}</div>
              </div>
              <div className="detail-field">
                <label>Educational Background:</label>
                <div className="field-value">{selectedResident.educationalBackground}</div>
              </div>
              <div className="detail-field">
                <label>Youth Age Group:</label>
                <div className="field-value">{selectedResident.youthAgeGroup}</div>
              </div>
              <div className="detail-field">
                <label>Youth Classification:</label>
                <div className="field-value">{selectedResident.youthClassification}</div>
              </div>
              <div className="detail-field">
                <label>Work Status:</label>
                <div className="field-value">{selectedResident.workStatus}</div>
              </div>
            </div>
            <div className="modal-actions">
              <button className="btn btn-submit" onClick={() => setShowDetailsModal(false)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default KKTable;
