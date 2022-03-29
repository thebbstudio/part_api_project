import React from 'react';
import PostItem from '../components/PostItem';

function News() {
  return (
    <div className="container">
      <h1 className="title">Новости</h1>
      <PostItem />
      <PostItem />
      <PostItem />
      <PostItem />
    </div>
  );
}

export default News;
