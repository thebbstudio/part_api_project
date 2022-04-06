import React from 'react';
import img from '../../assets/img/Staff/gilev2.jpg';
import cl from './StaffItem.module.css';

function StaffItem({ staff }) {
  return (
    <div className={cl.staffItem}>
      <div className={cl.staffImg}>
        <img src={staff.img_path} alt={staff.full_name} />
      </div>
      <p className={cl.fullName}>{staff.full_name}</p>
      <p>{staff.position}</p>
    </div>
  );
}

export default StaffItem;
