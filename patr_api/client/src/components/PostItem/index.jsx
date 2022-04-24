import React from 'react';
// import img from '../../assets/img/forEvents/10.jpg';
import cl from './PostItem.module.css';

function PostItem({ post }) {
  return (
    <div className={cl.miniEvent}>
      <div className={cl.img}>
        <img src={post.img_path} alt={post.title} />
      </div>
      <div className={cl.about}>
        <h5>{post.title}</h5>
        <p>{post.description}</p>
        <p className={cl.date}>{post.date_publication}</p>
      </div>
    </div>
  );
}

export default PostItem;
