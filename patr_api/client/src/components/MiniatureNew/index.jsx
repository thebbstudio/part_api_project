import React from 'react';
import PropType from 'prop-types';
import cl from './MiniatureNew.module.css';

function MiniatureNew({ style, news }) {
  return (
    <div className={cl.miniNew} style={{ ...style }}>
      <div className={cl.img}>
        <img src={news.img_path} alt="medals" />
      </div>
      <p>{news.title}</p>
    </div>
  );
}
MiniatureNew.defaultProps = {
  style: {
    maxWidth: '33.33%',
  },
};

MiniatureNew.propTypes = {
  style: PropType.shape({ maxWidth: PropType.string }),
  news: PropType.shape({
    id: PropType.number.isRequired,
    title: PropType.string.isRequired,
    description: PropType.string.isRequired,
    img_path: PropType.string.isRequired,
    date_publication: PropType.string.isRequired,

  }).isRequired,
};

export default MiniatureNew;
