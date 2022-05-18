import React, { useEffect, useState } from 'react';
import CardPaidService from '../components/CardPaidService';
import HttpService from '../http/HttpService';

function PaidServices() {
  const [paidData, setPaidData] = useState([]);

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
      <div className="parkCards">
        {paidData.map((data) => <CardPaidService data={data} key={data.id} />)}
      </div>
    </div>
  );
}

export default PaidServices;
