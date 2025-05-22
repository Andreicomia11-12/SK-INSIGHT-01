import React, { useState } from 'react';

const AdminAnnouncementTable = ({ announcements }) => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="admin-announcement-table-container">
      <table className="admin-announcement-table">
        <thead>
          <tr>
            <th>Time</th>
            <th>Subject</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {announcements.map((a) => (
            <tr key={a.id}>
              <td>{a.time}</td>
              <td>{a.subject}</td>
              <td>{a.title}</td>
              <td>
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
          <div className="admin-announcement-modal" onClick={e => e.stopPropagation()}>
            <h3>{selected.title}</h3>
            <p><strong>Time:</strong> {selected.time}</p>
            <p><strong>Subject:</strong> {selected.subject}</p>
            <p><strong>Details:</strong> {selected.body}</p>
            <button className="admin-announcement-close-btn" onClick={() => setSelected(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminAnnouncementTable; 