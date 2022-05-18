import React from 'react';
import cl from './PaidForm.module.css';

function PaidForm() {
  return (
    <form id="form" action="https://patriotlesnoy.ru/api/paidservice.php" method="POST">
      <div className={cl.block}>
        <label htmlFor="fullName">Имя и отчество:</label>
        <input
          className={`${cl.input} ${cl.inputM}`}
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
          className={`${cl.input} ${cl.inputM}`}
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
          className={`${cl.input} ${cl.inputS}`}
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
            className={`${cl.input} ${cl.inputVS}`}
            type="time"
            name="timeEvent"
            id="timeEvent"
            min="09:00"
            max="18:00"
            required
          />
          <small className={cl.small}>с 09:00 до 18:00</small>
        </div>

        <div className={cl.block} style={{ marginLeft: '2rem' }}>
          <label htmlFor="duration">Продолжительность</label>
          <select id="duration-list" className={`${cl.select} ${cl.inputVS}`}>
            <option defaultValue="1 час">1 час</option>
            <option value="2 часа">2 часа</option>
            <option value="3 часа">3 часа</option>
            <option value="4 часа">4 часа</option>
          </select>
          <small className={cl.small}>от 1 до 4 часов</small>
        </div>
      </div>

      <div className={cl.block}>
        <label htmlFor="numberPlayers">Количество участников:</label>
        <input
          placeholder="Введите кол-во"
          className={`${cl.input} ${cl.inputVS}`}
          type="number"
          name="numberPlayers"
          id="numberPlayers"
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

      <div className={cl.blockCheckbox}>
        <input type="checkbox" name="rules" id="rules" required />
        <label htmlFor="rules" style={{ marginLeft: '1rem' }}>
          <a className="ref" href="">С правилами ВТИ МБУ ЦПВДМ ознакомлен</a>
        </label>
      </div>

      <div className={cl.blockCheckbox}>
        <input type="checkbox" name="dataProcessing" id="dataProcessing" required />
        <label htmlFor="dataProcessing" style={{ marginLeft: '1rem' }}>Согласен на обработку персональных данных</label>
      </div>

      <div style={{ width: '100%', textAlign: 'center' }}>
        <button className={cl.btn} type="submit">Отправить заявку</button>
      </div>
    </form>
  );
}

export default PaidForm;
