import React from 'react';
import cl from './WorkSchedules.module.css';

function WorkSchedules() {
  return (
    <div className={cl.workSchedules}>
      <section>
        <h6>График работы:</h6>
        <p>Пн-Пт: 08:30 - 17:30</p>
        <p>Сб-Вс: Выходной</p>
      </section>

      <section>
        <h6>График работы парка:</h6>
        <p>Пн-Вс: 09:00 - 20:00</p>
      </section>
    </div>
  );
}

export default WorkSchedules;
