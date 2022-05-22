import React from 'react';
import cl from './StaffItem.module.css';
import BASE_URL from '../../http/config';

function StaffItem({ staff }) {
  return (
    <div className={cl.staffItem}>
      <div className={cl.staffImg}>
        <img
          src={staff.img_path.indexOf('http') === -1 ? (`${BASE_URL}/media/${staff.img_path}`) : (staff.img_path)}
          alt={staff.full_name}
        />
      </div>
      <p className={cl.fullName} dangerouslySetInnerHTML={{ __html: staff.full_name }}></p>
      <p>{staff.position}</p>
    </div>
  );
}

export default StaffItem;
