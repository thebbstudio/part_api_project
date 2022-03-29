import React from 'react';
import img from '../../assets/img/forEvents/10.jpg';
import cl from './MiniatureEvent.module.css';

function MiniatureEvent({ style }) {
  return (
    <div className={cl.miniEvent} style={{ ...style }}>
      <div className={cl.img}>
        <img src={img} alt="" />
      </div>
      <div className={cl.about}>
        <h5>ПРАКТИКА И ПОЗНАНИЕ!</h5>
        <p>
          18 января силами сотрудников Центра патриотического воспитания детей и молодёжи,
          при участии военнослужащих войсковой части 40274, а также ветеранов боевых действий,
          выпускников ВПК &quot;Грифон&quot; и Союза десантников были успешно организованы военные
          учебные сборы для студентов отдела среднего профессионального образования ТИ НИЯУ МИФИ.
          Это уже вторые учебные сборы, организованные при тесном сотрудничестве Центра
          патриотического воспитания и МИФИ, но в 2022 году наше взаимодействие выходит на качестве
        </p>
        <p className={cl.date}>
          <span>18 января 2022г</span>
        </p>
      </div>
    </div>
  );
}

export default MiniatureEvent;
