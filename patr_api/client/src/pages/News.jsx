import React, { useEffect, useState } from 'react';
import PostItem from '../components/PostItem';
import PostService from '../http/PostService';

function News() {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const allNews = await PostService.getAll('http://127.0.0.1:8000/patr_api/news?format=json');
    setNews(allNews.data);
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
