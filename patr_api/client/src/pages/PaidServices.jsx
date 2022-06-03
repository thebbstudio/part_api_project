import React, { useContext, useEffect, useState } from 'react';
import CardPaidService from '../components/CardPaidService';
import HttpService from '../http/HttpService';
import { PaidDataContext } from '../hoc/PaidDataProvider';
import Modal from '../components/Modal';
import PaidForm from '../components/PaidForm';
import Alert from '../components/Alert';

function PaidServices() {
  const [paidData, setPaidData] = useState([]);

  const [showAlert, setShowAlert] = useState(false);

  async function getPaid() {
    const http = await HttpService.getPaidService({ format: 'json' });
    setPaidData(http.data);
  }

  useEffect(() => {
    getPaid();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Платные услуги</h1>
      {showAlert ? <Alert>Ваша заявка отправлена</Alert> : ''}
      <div className="parkCards">
        {paidData.map((data) => <CardPaidService data={data} key={data.id} />)}
        <Modal id="modal">
          <PaidForm showAlert={showAlert} setShowAlert={setShowAlert} />
        </Modal>
      </div>
      <div className="paidData">
        <h6>Реквизиты</h6>
        ИНН 6681011441
        {' '}
        <br />
        КПП 668101001
        {' '}
        <br />
        ОГРН 1206600046971
        {' '}
        <br />
        ОКПО 46047308
        {' '}
        <br />
        ОКТМО 65749000
        {' '}
        <br />
        ОКВЭД 93.29.9
        {' '}
        <br />
        Наименование банка: Горфинуправление (МБУ ЦПВДМ, л/с 20626D12470, 21626D12470);
        {' '}
        <br />
        Расч.сч: 03234643657490006200;
        {' '}
        <br />
        Уральское ГУ Банка России//УФК по Свердловской области, г.Екатеринбург
        {' '}
        <br />
        К/с: 40102810645370000054
        {' '}
        <br />
        БИК 016577551
        {' '}
        <br />
      </div>
    </div>
  );
}

export default PaidServices;
