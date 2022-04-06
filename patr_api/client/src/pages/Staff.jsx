import React, { useEffect, useState } from 'react';
import StaffItem from '../components/StaffItem';
import PostService from '../http/PostService';

function Staff() {
  const [staff, setStaff] = useState([]);

  const getStaff = async () => {
    const allNews = await PostService.getAll('http://127.0.0.1:8000/patr_api/allstaff?format=json');
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
          <div className="staff-item">
            <StaffItem staff={oneStaff} key={oneStaff.id} />
          </div>
        ))}
      </div>
    </div>

  );
}

export default Staff;
