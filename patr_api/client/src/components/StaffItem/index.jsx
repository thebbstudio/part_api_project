import React from 'react';
import img from '../../assets/img/Staff/gilev2.jpg';
import cl from './StaffItem.module.css';

function StaffItem() {
  return (
    <div className={cl.staffItem}>
      <div className={cl.staffImg}>
        <img src={img} alt="" />
      </div>
      <p className={cl.fullName}>Гилёв Евгений Андреевич</p>
      <p>Специалист по работе с молодёжью</p>
    </div>
  );
}

export default StaffItem;
