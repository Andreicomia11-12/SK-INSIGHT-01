import React, { useState } from 'react';

const AdminAnnouncementTable = ({ announcements }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="admin-announcement-table-container" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <table className="admin-announcement-table" style={{ width: '100%', maxWidth: '1200px' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'center', padding: '12px 15px' }}>Time</th>
            <th style={{ textAlign: 'center', padding: '12px 15px' }}>Subject</th>
            <th style={{ textAlign: 'center', padding: '12px 15px' }}>Title</th>
            <th style={{ textAlign: 'center', padding: '12px 15px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {announcements.map((a) => (
            <tr key={a.id}>
              <td style={{ textAlign: 'center', padding: '12px 15px' }}>{a.time}</td>
              <td style={{ textAlign: 'center', padding: '12px 15px' }}>{a.subject}</td>
              <td style={{ textAlign: 'center', padding: '12px 15px' }}>{a.title}</td>
              <td style={{ textAlign: 'center', padding: '12px 15px' }}>
                <button className="admin-announcement-view-btn" onClick={() => setSelected(a)}>
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {selected && (
        <div className="admin-announcement-modal-overlay" onClick={() => setSelected(null)}>
          <div className="admin-announcement-modal" onClick={e => e.stopPropagation()} style={{ 
            maxWidth: '600px', 
            width: '90%', 
            padding: '30px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div>
              <h3 style={{ 
                color: '#0a3871', 
                marginBottom: '20px', 
                fontSize: '22px', 
                wordBreak: 'break-word',
                overflowWrap: 'break-word'
              }}>{selected.title}</h3>
              <div style={{ marginBottom: '15px' }}>
                <strong style={{ display: 'block', marginBottom: '5px', color: '#333' }}>Time:</strong>
                <span style={{ color: '#555', wordBreak: 'break-word' }}>{selected.time}</span>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <strong style={{ display: 'block', marginBottom: '5px', color: '#333' }}>Subject:</strong>
                <span style={{ color: '#555', wordBreak: 'break-word' }}>{selected.subject}</span>
              </div>
              <div style={{ marginBottom: '20px' }}>
                <strong style={{ display: 'block', marginBottom: '5px', color: '#333' }}>Details:</strong>
                <p style={{ 
                  color: '#555', 
                  lineHeight: '1.6', 
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  overflowWrap: 'break-word'
                }}>{selected.body}</p>
              </div>
            </div>
            <div style={{ marginTop: '20px', borderTop: '1px solid #eee', paddingTop: '20px' }}>
              <button className="admin-announcement-close-btn" onClick={() => setSelected(null)}>
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAnnouncementTable; 