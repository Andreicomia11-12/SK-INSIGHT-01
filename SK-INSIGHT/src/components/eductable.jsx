import React from 'react';
import '../css/kkProfile.css';

const KKTable = ({ residents }) => {
  return (
    <div className="table-responsive">
      <table className="table table-striped table-hover">
        <thead className="table-light">
          <tr>
            <th>#</th>
            <th>Resident's Name</th>
            <th>Age</th>
            <th>Purok</th>
            <th>Gender</th>
            <th>Action</th>
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
              <td className="act">View Full Details {'>>'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KKTable;
