import React from 'react';
import cl from './MiniatureNew.module.css';
import img from '../../assets/img/forNews/w9QnjwAXPzQ.jpg';

function MiniatureNew({ style }) {
  return (
    <div className={cl.miniNew} style={{ ...style }}>
      <div className={cl.img}>
        <img src={img} alt="medals" />
      </div>
      <p>
        Проведение соревнований в 2022 году состоится в ДОЛ &quot;Дружба&quot;,
        с.Камышево, Белоярский городской округ Свердловской области.
      </p>
    </div>
  );
}

export default MiniatureNew;
