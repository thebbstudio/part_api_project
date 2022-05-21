import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import cl from './CardPaidService.module.css';
import Modal from '../Modal';
import PaidForm from '../PaidForm';

function CardPaidService({ data }) {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef();

  useEffect(() => {
    ref.current.addEventListener('click', () => {
      setIsActive(true);
    });
  });

  return (
    <>
      {isActive ? (
        <Modal id={`modal${data.id}`} title={data.title}>
          <PaidForm />
        </Modal>
      ) : ''}
      <div className={cl.parkCard} ref={ref}>
        <a href={`#modal${data.id}`}>
          <div className={`${cl.cardItem}`}>
            <div className={cl.cardImg}>
              <img src={data.imgPath} alt={data.title} />
            </div>
            <div>
              <h5 className={cl.title}>
                {data.title}
                {' '}
                <span style={{ fontFamily: 'generalFont' }}>{`${data.cost}${data.dimensionMeasurement}`}</span>
              </h5>
              <p className="black-text" dangerouslySetInnerHTML={{ __html: data.description }}></p>
            </div>

          </div>
        </a>
      </div>
    </>
  );
}
export default CardPaidService;
