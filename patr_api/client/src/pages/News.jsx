import React, { useEffect, useState } from 'react';
import PostItem from '../components/PostItem';
import HttpService from '../http/HttpService';

function News() {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const allNews = await HttpService.getNews({ format: 'json' });
    setNews(allNews.data);
    // console.log(allNews.data);
  };

  useEffect(() => {
    getNews();
  }, []);
  return (
    <div className="container">
      <h1 className="title">Новости</h1>
      {news.map((post) => <PostItem post={post} key={post.id} />)}
    </div>
  );
}

export default News;
