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
        <h6>График работы в парке:</h6>
        <p>Пн-Вс: 10:00 - 19:00</p>
      </section>
    </div>
  );
}

export default WorkSchedules;
