import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import cl from './MiniatureNew.module.css';

function MiniatureNew({ style, news }) {
  return (
    <Link to={`/post-news/${news.id}`} style={{ ...style }}>
      <div className={cl.miniNew}>

        <div className={cl.img}>
          <img src={news.img_path} alt={news.title} />
        </div>
        <p className="black-semi">{news.title}</p>

      </div>
    </Link>
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
