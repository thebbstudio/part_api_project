import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-spinner-animated';
import StaffItem from '../components/StaffItem';
import HttpService from '../http/HttpService';

function Staff() {
  const [staff, setStaff] = useState([]);

  const getStaff = async () => {
    const allNews = await HttpService.getStaff({ format: 'json' });
    setStaff(allNews.data);
  };

  useEffect(() => {
    document.querySelector('#upper').style.stroke = '#378b73';
    getStaff();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Сотрудники</h1>
      {staff[0] === undefined ? (
        <div style={{ height: '300px' }}>
          <center>
            <Spinner
              text="Загрузка..."
              width="100px"
              height="100px"
              center={false}
            />
          </center>
        </div>
      ) : (
        <div className="staff">
          {staff.map((oneStaff) => (
            <div className="staff-item" key={oneStaff.id}>
              <StaffItem staff={oneStaff} />
            </div>
          ))}
        </div>
      )}

    </div>

  );
}

export default Staff;
