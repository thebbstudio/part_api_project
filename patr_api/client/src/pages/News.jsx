import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-spinner-animated';
import PostItem from '../components/PostItem';
import HttpService from '../http/HttpService';

function News() {
  const [news, setNews] = useState([]);

  const getNews = async () => {
    const allNews = await HttpService.getNews({ format: 'json' });
    setNews(allNews.data);
  };

  useEffect(() => {
    document.querySelector('#upper').style.stroke = '#378b73';
    getNews();
  }, []);
  return (
    <div className="container">
      <h1 className="title">Новости</h1>
      {news[0] === undefined ? (
        <div style={{ height: '300px' }}>
          <center>
            <Spinner
              text="Загрузка..."
              width="100px"
              height="100px"
              center={false}
            />
          </center>
        </div>
      )
        : (
          news.map((post) => <PostItem post={post} key={post.id} />)
        )}
    </div>
  );
}

export default News;
