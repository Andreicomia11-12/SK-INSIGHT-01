import React from 'react';
import '../css/ProfilingPage.css';
import Navbar from '../components/Navbar';

const ProfilingPage = () => {
    return (
        <div className="profiling-page">
            <Navbar />
            <div className="profiling-container">
                <h2>Profiling Form</h2>
                <form className="profiling-form">
                    <div className="form-group"><label>Name:</label><input className="profiling-input" type="text" name="name" required /></div>
                    <div className="form-group"><label>Age:</label><input className="profiling-input" type="text" name="age" required /></div>
                    <div className="form-group"><label>Barangay:</label><input className="profiling-input" type="text" name="barangay" required /></div>
                    <div className="form-group"><label>Email:</label><input className="profiling-input" type="email" name="email" required /></div>
                    <div className="form-group"><label>Contact No.:</label><input className="profiling-input" type="text" name="contact" required /></div>
                    <div className="form-group"><label>Purok:</label><input className="profiling-input" type="text" name="purok" required /></div>
                    <div className="form-group"><label>Municipality:</label><input className="profiling-input" type="text" name="municipality" required /></div>
                    <div className="form-group"><label>Province:</label><input className="profiling-input" type="text" name="province" required /></div>
                    <div className="form-group"><label>Birthday:</label><input className="profiling-input" type="date" name="birthday" required /></div>
                    <div className="form-group"><label>Gender:</label>
                        <select className="profiling-input" name="gender" required>
                            <option value="">Select</option>
                            <option>Male</option><option>Female</option><option>Other</option>
                        </select>
                    </div>
                    <div className="form-group"><label>Civil Status:</label>
                        <select className="profiling-input" name="civilStatus" required>
                            <option value="">Select</option>
                            <option>Single</option><option>Married</option><option>Divorced</option><option>Widowed</option>
                        </select>
                    </div>
                    <div className="form-group"><label>Educational Background:</label>
                        <select className="profiling-input" name="education" required>
                            <option value="">Select</option>
                            <option>Elementary</option><option>High School</option><option>College</option><option>Vocational</option><option>None</option>
                        </select>
                    </div>
                    <div className="form-group"><label>Youth Age Group:</label>
                        <select className="profiling-input" name="ageGroup" required>
                            <option value="">Select</option>
                            <option>15-17</option><option>18-24</option><option>25-30</option>
                        </select>
                    </div>
                    <div className="form-group"><label>Youth Classification:</label>
                        <select className="profiling-input" name="classification" required>
                            <option value="">Select</option>
                            <option>In-school Youth</option><option>Out-of-school Youth</option><option>Working Youth</option>
                            <option>Children in Conflict with the Law</option><option>Indigenous People</option><option>Persons with Disabilities</option>
                        </select>
                    </div>
                    <div className="form-group"><label>Work Status:</label>
                        <select className="profiling-input" name="workStatus" required>
                            <option value="">Select</option>
                            <option>Employed</option><option>Unemployed</option><option>Self-Employed</option><option>Student</option>
                        </select>
                    </div>
                    <div className="form-group full-width">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfilingPage;
