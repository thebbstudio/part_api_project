import React from 'react';
// import img from '../../assets/img/forEvents/10.jpg';
import cl from './PostItem.module.css';

function PostItem({ post }) {
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
    <div className={cl.miniEvent}>
      <div className={cl.img}>
        <img src={post.img_path} alt={post.title} />
      </div>
      <div className={cl.about}>
        <h5>{post.title}</h5>
        <p dangerouslySetInnerHTML={{ __html: post.description }} />
        <p className={cl.date}>
          {`${datePublication.getDate()} ${getMonth(datePublication)} ${datePublication.getFullYear()}`}
        </p>
      </div>
    </div>
  );
}

export default PostItem;
