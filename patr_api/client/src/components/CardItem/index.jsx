import React from 'react';
import propTypes from 'prop-types';
import cl from './CardItem.module.css';

function CardItem({ el }) {
  return (
    <div className={cl.cardItem}>
      <div className={cl.cardImg}>
        <img src={el.srcForImg} alt={el.alt} />
      </div>
      <p>{el.title}</p>
    </div>
  );
}

CardItem.propTypes = {
  el: propTypes.shape({
    title: propTypes.string.isRequired,
    srcForImg: propTypes.string.isRequired,
    alt: propTypes.string.isRequired,
  }).isRequired,
};

export default CardItem;
