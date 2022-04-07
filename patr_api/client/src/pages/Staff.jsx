import React, { useEffect, useState } from 'react';
import StaffItem from '../components/StaffItem';
import HttpService from '../http/HttpService';

function Staff() {
  const [staff, setStaff] = useState([]);

  const getStaff = async () => {
    const allNews = await HttpService.getStaff({ format: 'json' });
    setStaff(allNews.data);
  };

  useEffect(() => {
    getStaff();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Сотрудники</h1>
      <div className="staff">
        {staff.map((oneStaff) => (
          <div className="staff-item" key={oneStaff.id}>
            <StaffItem staff={oneStaff} />
          </div>
        ))}
      </div>
    </div>

  );
}

export default Staff;
