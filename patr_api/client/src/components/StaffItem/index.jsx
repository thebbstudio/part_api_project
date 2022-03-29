import React from 'react';
import img from '../../assets/img/Staff/gilev2.jpg';
import cl from './StaffItem.module.css';

function StaffItem() {
  return (
    <div className={cl.staffItem}>
      <div className={cl.staffImg}>
        <img src={img} alt="" />
      </div>
      <h3>Гилёв Евгений Андреевич</h3>
      <p>Специалист по работе с молодёжью</p>
    </div>
  );
}

export default StaffItem;
