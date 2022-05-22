import React, { useState } from 'react';
import HttpService from '../../http/HttpService';
import cl from './PaidForm.module.css';

function PaidForm() {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [dataEvent, setDataEvent] = useState('');
  const [timeEvent, setTimeEvent] = useState('');
  const [duration, setDuration] = useState('1 час');
  const [numberPlayers, setNumberPlayers] = useState('');
  const [childrenWill, setChildrenWill] = useState('yes');
  const [rules, setRules] = useState(false);
  const [dataProcessing, setDataProcessing] = useState(false);

  async function httpForm(_paidForm) {
    const response = await HttpService.postPaidForm({ format: 'json', ..._paidForm });
    return response;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const paidForm = {
      fullName,
      phone,
      dataEvent,
      timeEvent,
      duration,
      numberPlayers,
      childrenWill,
    };
    httpForm(paidForm);
  }

  return (
    <form
      id="form"
      onSubmit={handleSubmit}
      method="POST"
    >
      <div className={cl.block}>
        <label htmlFor="fullName">Имя и отчество:</label>
        <input
          className={`${cl.input} ${cl.inputM}`}
          type="text"
          name="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
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
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
          value={dataEvent}
          onChange={(e) => setDataEvent(e.target.value)}
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
            value={timeEvent}
            onChange={(e) => setTimeEvent(e.target.value)}
            id="timeEvent"
            min="09:00"
            max="18:00"
            required
          />
          <small className={cl.small}>с 09:00 до 18:00</small>
        </div>

        <div className={cl.block} style={{ marginLeft: '2rem' }}>
          <label htmlFor="duration">Продолжительность</label>
          <select
            id="duration-list"
            defaultValue={duration}
            onChange={(e) => setDuration(e.target.value)}
            className={`${cl.select} ${cl.inputVS}`}
          >
            <option value="1 час">1 час</option>
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
          value={numberPlayers}
          onChange={(e) => setNumberPlayers(e.target.value)}
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
            value="yes"
            onClick={(e) => setChildrenWill(e.target.value)}
            id="childrenWill-yes"
            required
          />
          <label htmlFor="childrenWill-yes">да</label>
        </div>
        <div>
          <input
            type="radio"
            name="childrenWill"
            value="no"
            onClick={(e) => setChildrenWill(e.target.value)}
            id="childrenWill-no"
          />
          <label htmlFor="childrenWill-no">нет</label>
        </div>
      </div>

      <div className={cl.blockCheckbox}>
        <input
          type="checkbox"
          name="rules"
          checked={rules}
          onChange={(e) => setRules(!rules)}
          id="rules"
          required
        />
        <label htmlFor="rules" style={{ marginLeft: '1rem' }}>
          <a className="ref" href="">С правилами ВТИ МБУ ЦПВДМ ознакомлен</a>
        </label>
      </div>

      <div className={cl.blockCheckbox}>
        <input
          type="checkbox"
          name="dataProcessing"
          checked={dataProcessing}
          onChange={(e) => setDataProcessing(!dataProcessing)}
          id="dataProcessing"
          required
        />
        <label htmlFor="dataProcessing" style={{ marginLeft: '1rem' }}>Согласен на обработку персональных данных</label>
      </div>

      <div style={{ width: '100%', textAlign: 'center' }}>
        <button className={cl.btn} type="submit">Отправить заявку</button>
      </div>
    </form>
  );
}

export default PaidForm;
