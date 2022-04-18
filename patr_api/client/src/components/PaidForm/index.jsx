import React from 'react';
import cl from './PaidForm.module.css';

function PaidForm() {
  return (
    <form id="form" action="https://patriotlesnoy.ru/api/paidservice.php" method="POST">

      <div className={cl.block}>
        <label htmlFor="typePaid">Выберите услугу:</label>
        <select
          className={cl.select}
          onChange="typePaidService()"
          name="typePaid"
          id="typePaid"
          required
        >
          <option value="пеинтбол" selected>пеинтбол</option>
          <option value="аренда полигона">аренда полигона</option>
        </select>
      </div>

      <div className={cl.block}>
        <label htmlFor="fullName">Имя и отчество:</label>
        <input
          className={`${cl.input} ${cl.inputL}`}
          type="text"
          name="fullName"
          id="fullName"
          placeholder="Введите ваше имя и отчество"
          required
        />
      </div>

      <div className={cl.block}>
        <label htmlFor="phone">Телефон:</label>
        <input
          className="input-m"
          type="tel"
          name="phone"
          id="phone"
          placeholder="Введите номер телефона"
          required
        />
      </div>

      <div className={cl.block}>
        <label htmlFor="dateEvent">Выберите дату:</label>
        <input
          className="input-s"
          type="date"
          name="dateEvent"
          id="dateEvent"
          required
        />
      </div>

      <div style={{ display: 'flex' }}>
        <div className={cl.block}>
          <label htmlFor="timeEvent">Начало в:</label>
          <input
            onChange="checkTime()"
            className="input-s"
            type="time"
            name="timeEvent"
            id="timeEvent"
            min="09:00"
            max="18:00"
            required
          />
          <small className={cl.small}>с 09:00 до 18:00</small>
        </div>

        <div className={cl.block}>
          <label htmlFor="timeEvent">Продолжительность</label>
          <input
            className="input-s"
            type="time"
            name="timeEvent"
            id="timeEvent"
            value="01:00"
            min="01:00"
            max="04:00"
            required
          />
          <small className={cl.small}>от 1 часа до 4-х часов</small>
        </div>
      </div>

      <div className={cl.block}>
        <label htmlFor="number-of-participants">Количество участников:</label>
        <input
          placeholder="Введите кол-во"
          className="input-s"
          type="number"
          name="numberOfParticipants"
          id="numberOfParticipants"
          required
        />
      </div>

      <div className={cl.block}>
        Участие несовершеннолетних (14+)
        <div>
          <input
            type="radio"
            name="childrenWill"
            id="childrenWill-yes"
            required
          />
          <label htmlFor="childrenWill-yes">да</label>
        </div>
        <div>
          <input
            type="radio"
            name="childrenWill"
            id="childrenWill-no"
          />
          <label htmlFor="childrenWill-no">нет</label>
        </div>
      </div>

      <div>
        <input type="checkbox" name="rules" id="rules" required />
        <label htmlFor="rules">
          <a className="ref" href="">С правилами ВТИ МБУ ЦПВДМ ознакомлен</a>
        </label>
      </div>

      <div>
        <input type="checkbox" name="dataProcessing" id="dataProcessing" required />
        <label htmlFor="dataProcessing">Согласен на обработку персональных данных</label>
      </div>

      <div>
        <button className="form-btn" type="submit">Отправить заявку</button>
      </div>
    </form>
  );
}

export default PaidForm;
