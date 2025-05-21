import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import '../css/AssistancePage.css';
import '../css/ProfilingPage.css';
const AssistancePage = () => {
    const [siblings, setSiblings] = useState([
        { name: '', age: '', education: '' },
        { name: '', age: '', education: '' },
        { name: '', age: '', education: '' },
    ]);

    const handleSiblingChange = (index, field, value) => {
        const updated = [...siblings];
        updated[index][field] = value;
        setSiblings(updated);
    };

    const addSiblingRow = () => {
        setSiblings([...siblings, { name: '', age: '', education: '' }]);
    };

    return (
        <div className="assistance-page">
            <Navbar />
            <div className="assistance-container">
                <h2>Educational Assistance Form</h2>

                <form className="assistance-form">
                    <div>
                        <label htmlFor="school">School Name:</label>
                        <input type="text" id="school" name="school" required />
                    </div>

                    <div>
                        <label htmlFor="gradeLevel">Current Grade/Year Level:</label>
                        <input type="text" id="gradeLevel" name="gradeLevel" required />
                    </div>

                    <div>
                        <label htmlFor="course">Course (if any):</label>
                        <input type="text" id="course" name="course" />
                    </div>

                    <div>
                        <label htmlFor="schoolType">School Type:</label>
                        <select id="schoolType" name="schoolType" required>
                            <option value="">Select</option>
                            <option>Public</option>
                            <option>Private</option>
                        </select>
                    </div>

                    <h3>Siblings Information</h3>
                    <table className="siblings-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Educational Level</th>
                            </tr>
                        </thead>
                        <tbody>
                            {siblings.map((sibling, index) => (
                                <tr key={index}>
                                    <td>
                                        <input
                                            type="text"
                                            value={sibling.name}
                                            onChange={(e) => handleSiblingChange(index, 'name', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={sibling.age}
                                            onChange={(e) => handleSiblingChange(index, 'age', e.target.value)}
                                        />
                                    </td>
                                    <td>
                                        <input
                                            type="text"
                                            value={sibling.education}
                                            onChange={(e) => handleSiblingChange(index, 'education', e.target.value)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button type="button" className="add-row-btn" onClick={addSiblingRow}>Add Row</button>

                    <h3>Required Documents</h3>
                    <div className="file-group">
                        <label>Sedula:</label>
                        <input type="file" accept=".pdf,.jpg,.png" required />
                    </div>

                    <div className="file-group">
                        <label>Certificate of Registration:</label>
                        <input type="file" accept=".pdf,.jpg,.png" required />
                    </div>

                    <div className="file-group">
                        <label>School ID:</label>
                        <input type="file" accept=".pdf,.jpg,.png" required />
                    </div>

                    <button type="submit" className="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default AssistancePage;
