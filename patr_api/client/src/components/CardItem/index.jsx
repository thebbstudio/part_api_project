import React from 'react';
import propTypes from 'prop-types';
import cl from './CardItem.module.css';

function CardItem({ element }) {
  return (
    <div className={cl.parkCard}>
      <div className={cl.cardItem}>
        <div className={cl.cardImg}>
          <img src={element.srcForImg} alt={element.alt} />
        </div>
        <p className={cl.title}>{element.title}</p>
      </div>
    </div>
  );
}

CardItem.propTypes = {
  element: propTypes.shape({
    title: propTypes.string.isRequired,
    srcForImg: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
  }).isRequired,
};

export default CardItem;
