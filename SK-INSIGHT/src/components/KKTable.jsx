import React from 'react';
import '../css/kkProfile.css';

const KKTable = ({ residents }) => {
  return (
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
              <td className="act">View Full Details {'>>'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default KKTable;
