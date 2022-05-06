import React from 'react';
import PropType from 'prop-types';
import cl from './MiniatureEvent.module.css';

function MiniatureEvent({ style, event }) {
  return (
    <div className={cl.miniEvent} style={{ ...style }}>
      <div className={cl.img}>
        <img src={event.img_path} alt="" />
      </div>
      <div className={cl.about}>
        <h5>{event.title}</h5>
        <p dangerouslySetInnerHTML={{ __html: event.description }}></p>
        <p className={cl.date}>
          <span>{event.date_publication}</span>
        </p>
      </div>
    </div>
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
