import React from 'react';
import cl from './StaffItem.module.css';

function StaffItem({ staff }) {
  return (
    <div className={cl.staffItem}>
      <div className={cl.staffImg}>
        <img src={staff.img_path} alt={staff.full_name} />
      </div>
      <p className={cl.fullName} dangerouslySetInnerHTML={{ __html: staff.full_name }}></p>
      <p>{staff.position}</p>
    </div>
  );
}

export default StaffItem;
