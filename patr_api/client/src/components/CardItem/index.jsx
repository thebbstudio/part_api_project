import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cl from './CardItem.module.css';

function CardItem({ card }) {
  return (
    <div className={cl.parkCard}>
      <Link to={card.url}>
        <div className={`${cl.cardItem}`}>
          <div className={cl.cardImg}>
            <img src={card.img_path} alt={card.title} />
          </div>
          <p className={cl.title}>{card.title}</p>
        </div>
      </Link>
    </div>
  );
}

CardItem.defaultProps = {
  // card.url: ''
};

CardItem.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    url: PropTypes.string,
    title: PropTypes.string.isRequired,
    img_path: PropTypes.string.isRequired,
  }).isRequired,
};

export default CardItem;
