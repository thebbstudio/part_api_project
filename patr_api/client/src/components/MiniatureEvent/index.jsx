/* eslint-disable max-len */
import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import cl from './MiniatureEvent.module.css';
import BASE_URL from '../../http/config';

function MiniatureEvent({ style, event }) {
  const datePublication = new Date(event.date_publication);
  const getMonth = (date) => {
    let days = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря',
    ];
    return days[date.getMonth()];
  };
  return (
    <Link to={`/post-event/${event.id}`} style={{ ...style }}>
      <div className={cl.miniEvent}>

        <div className={cl.img}>
          <img
            src={event.img_path.indexOf('http') === -1 ? (`${BASE_URL}/media/${event.img_path}`) : (event.img_path)}
            alt={event.title}
          />
        </div>
        <div className={cl.about}>
          <h5 className="black-title">{event.title}</h5>
          <p className="black-text" dangerouslySetInnerHTML={{ __html: event.description }}></p>
          {/* <p className={cl.date}>
          <span>{`${datePublication.getDate()} ${getMonth(datePublication)} ${datePublication.getFullYear()}`}</span>
        </p> */}
        </div>

      </div>
    </Link>
  );
}

MiniatureEvent.defaultProps = {
  style: {
    maxWidth: '100%',
  },
};

MiniatureEvent.propTypes = {
  style: PropType.shape({ maxWidth: PropType.string }),
  event: PropType.shape({
    id: PropType.number.isRequired,
    title: PropType.string.isRequired,
    description: PropType.string.isRequired,
    img_path: PropType.string.isRequired,
    date_publication: PropType.string.isRequired,

  }).isRequired,
};

export default MiniatureEvent;
