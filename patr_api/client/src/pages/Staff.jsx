import React from 'react';
import StaffItem from '../components/StaffItem';

function Staff() {
  return (
    <div className="container">
      <h1 className="title">Сотрудники</h1>
      <div className="staff">
        <div className="staff-item">
          <StaffItem />
        </div>
        <div className="staff-item">
          <StaffItem />
        </div>
        <div className="staff-item">
          <StaffItem />
        </div>
        <div className="staff-item">
          <StaffItem />
        </div>
        <div className="staff-item">
          <StaffItem />
        </div>
        <div className="staff-item">
          <StaffItem />
        </div>
        <div className="staff-item">
          <StaffItem />
        </div>
        <div className="staff-item">
          <StaffItem />
        </div>
      </div>
    </div>

  );
}

export default Staff;
