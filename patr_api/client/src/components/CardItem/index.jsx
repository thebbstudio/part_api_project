import React from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';
import cl from './CardItem.module.css';

function CardItem({ card }) {
  const params = useParams();
  if (params.id === undefined) {
    return (
      <div className={cl.parkCard}>
        <Link to={card.id.toString()}>
          <div className={`${cl.cardItem}`}>
            <div className={cl.cardImg}>
              <img src={card.img_path} alt={card.title} />
            </div>
            <p className={cl.title} dangerouslySetInnerHTML={{ __html: card.title }}></p>
          </div>
        </Link>
      </div>
    );
  }
  return (
    <div className={cl.parkCard}>
      <div className={`${cl.cardItem}`}>
        <div className={cl.cardImg}>
          <img src={card.img_path} alt={card.title} />
        </div>
        <p className={cl.title} dangerouslySetInnerHTML={{ __html: card.title }}></p>
      </div>
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
