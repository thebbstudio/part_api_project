import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-spinner-animated';
import PostItem from '../components/PostItem';
import HttpService from '../http/HttpService';
import useChangeStrokeInSpinner from '../utils/hooks/useChangeStrokeInSpinner';

function News() {
  const [news, setNews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useChangeStrokeInSpinner(isLoading);

  useEffect(() => {
    const getNews = async () => {
      setIsLoading(true);
      const allNews = await HttpService.getNews({ format: 'json' });
      setNews(allNews.data);
      setIsLoading(false);
    };

    getNews();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Новости</h1>

      {!news && (
        <div style={{ height: '300px' }}>
          <center>
            <Spinner text="Загрузка..." width="100px" height="100px" center={false} />
          </center>
        </div>
      )}

      {news?.map((post) => (
        <PostItem post={post} key={post.id} />
      ))}
    </div>
  );
}

export default News;
