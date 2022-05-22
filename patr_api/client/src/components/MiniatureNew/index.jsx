import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import cl from './MiniatureNew.module.css';
import BASE_URL from '../../http/config';

function MiniatureNew({ style, news }) {
  return (
    <Link to={`/post-news/${news.id}`} style={{ ...style }}>
      <div className={cl.miniNew}>

        <div className={cl.img}>
          <img
            src={news.img_path.indexOf('http') === -1 ? (`${BASE_URL}/media/${news.img_path}`) : (news.img_path)}
            alt={news.title}
          />
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
