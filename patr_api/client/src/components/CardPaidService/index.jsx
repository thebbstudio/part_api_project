import React, { useContext } from 'react';
import cl from './CardPaidService.module.css';
import BASE_URL from '../../http/config';
import { PaidDataContext } from '../../hoc/PaidDataProvider';

function CardPaidService({ data }) {
  const [title, setTitle] = useContext(PaidDataContext);

  function handleOnClick() {
    setTitle(data.title);
    window.location.hash = '#modal';
  }

  return (
    <div className={cl.parkCard}>
      <div className={`${cl.cardItem}`}>
        <div className={cl.cardImg}>
          <img
            src={data.imgPath.indexOf('http') === -1 ? (`${BASE_URL}/media/${data.imgPath}`) : (data.imgPath)}
            alt={data.title}
          />
        </div>
        <div>
          <h5 className={cl.title}>
            {data.title}
            {' '}
            <span style={{ fontFamily: 'generalFont' }}>{`${data.cost} ${data.dimensionMeasurement}`}</span>
          </h5>
          <p className="black-text" dangerouslySetInnerHTML={{ __html: data.description }}></p>
        </div>
        <div style={{ width: '100%', textAlign: 'center' }}>
          <button type="button" className={cl.btn} onClick={handleOnClick}>Заполнить заявку</button>
        </div>
      </div>
    </div>
  );
}
export default CardPaidService;
