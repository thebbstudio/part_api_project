/* eslint-disable max-len */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import cl from './PostItem.module.css';
import BASE_URL from '../../http/config';

function PostItem({ post }) {
  const location = useLocation();
  // console.log(location);
  const datePublication = new Date(post.date_publication);
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
    <Link to={location.pathname === '/news' ? `/post-news/${post.id}` : `/post-event/${post.id}`}>
      <div className={cl.miniEvent}>
        <div className={cl.img}>
          <img
            src={post.img_path.indexOf('http') === -1 ? (`${BASE_URL}/media/${post.img_path}`) : (post.img_path)}
            alt={post.title}
          />
        </div>
        <div className={cl.about}>
          <h5 className="black-title">{post.title}</h5>
          <p className="black-text" dangerouslySetInnerHTML={{ __html: post.description }} />
          {/* <p className={cl.date}>
          {`${datePublication.getDate()} ${getMonth(datePublication)} ${datePublication.getFullYear()}`}
        </p> */}
        </div>
      </div>
    </Link>
  );
}

export default PostItem;
