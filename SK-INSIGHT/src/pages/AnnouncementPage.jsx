import React, { useState } from 'react';
import '../css/AnnouncementPage.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const sampleAnnouncements = [
  {
    id: 1,
    time: '2024-05-01 10:00 AM',
    subject: 'Community Cleanup',
    title: 'Barangay-wide Cleanup Drive',
    body: 'Join us for a community-wide cleanup event this Saturday. Tools and lunch will be provided. Meet at the Barangay Hall by 8:00 AM.'
  },
  {
    id: 2,
    time: '2024-05-02 3:00 PM',
    subject: 'Health',
    title: 'Free Vaccination Program',
    body: 'The barangay will be offering free vaccinations for flu and COVID-19. Come to the health center with your valid ID.'
  },
  {
    id: 3,
    time: '2024-05-05 9:00 AM',
    subject: 'Education',
    title: 'Scholarship Application Deadline',
    body: 'Don’t miss the deadline for the upcoming school year’s scholarship application. Submit all requirements to the SK Office by Friday.'
  },
  {
    id: 4,
    time: '2024-05-07 2:00 PM',
    subject: 'Youth Summit',
    title: 'SK Youth Leadership Camp',
    body: 'Calling all youth leaders! Register for the 3-day leadership camp happening this June. Develop skills, build friendships, and get inspired.'
  },
  {
    id: 5,
    time: '2024-05-10 1:00 PM',
    subject: 'Health',
    title: 'Blood Donation Drive',
    body: 'In collaboration with Red Cross, we are hosting a blood donation drive. Donors must be 18–60 years old and in good health.'
  },
  {
    id: 6,
    time: '2024-05-12 4:00 PM',
    subject: 'Infrastructure',
    title: 'Road Repair Schedule',
    body: 'Road repairs will take place on Purok 3 from May 15–20. Expect road closures and detours. Plan your routes accordingly.'
  },
  {
    id: 7,
    time: '2024-05-14 10:00 AM',
    subject: 'Cultural',
    title: 'Fiesta Week Parade',
    body: 'The annual fiesta parade will take place on May 21. All barangay residents are invited to join the celebration and wear traditional attire.'
  },
  {
    id: 8,
    time: '2024-05-15 8:30 AM',
    subject: 'Government Services',
    title: 'Mobile Birth Registration',
    body: 'The Civil Registrar’s Office will be conducting mobile birth registration at the Barangay Hall. Bring original and photocopy of documents.'
  }
];

const AnnouncementPage = () => {
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null);

  return (
    <>
      <Navbar />
      <div className="sk-announcement-page">
        <div className="sk-announcement-wrapper">
          <h2 className="sk-announcement-title">Announcements</h2>

          <div className="sk-announcement-table-container">
            <table className="sk-announcement-table">
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Subject</th>
                  <th>Title</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {sampleAnnouncements.map((announcement) => (
                  <tr key={announcement.id}>
                    <td>{announcement.time}</td>
                    <td>{announcement.subject}</td>
                    <td>{announcement.title}</td>
                    <td>
                      <button
                        className="sk-btn sk-btn-view"
                        onClick={() => setSelectedAnnouncement(announcement)}
                      >
                        View
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="sk-announcement-card-list">
            {sampleAnnouncements.map((announcement) => (
              <div className="sk-announcement-card" key={announcement.id}>
                <h4>{announcement.title}</h4>
                <p><strong>Time:</strong> {announcement.time}</p>
                <p><strong>Subject:</strong> {announcement.subject}</p>
                <button
                  className="sk-btn sk-btn-view"
                  onClick={() => setSelectedAnnouncement(announcement)}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>

          {/* Modal */}
          {selectedAnnouncement && (
            <div className="sk-modal-overlay">
              <div className="sk-modal">
                <h3>{selectedAnnouncement.title}</h3>
                <p><strong>Time:</strong><br />{selectedAnnouncement.time}</p>
                <p><strong>Subject:</strong><br />{selectedAnnouncement.subject}</p>
                <p><strong>Details:</strong><br />{selectedAnnouncement.body}</p>
                <div className="sk-modal-button-center">
                  <button
                    className="sk-btn sk-btn-submit"
                    onClick={() => setSelectedAnnouncement(null)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AnnouncementPage;
