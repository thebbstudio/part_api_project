import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-spinner-animated';
import Carousel from '../components/Carousel';
import HttpService from '../http/HttpService';
import BASE_URL from '../http/config';

const style = {
  height: '300px',
};

function NewsIdPage() {
  const params = useParams();
  const [post, setPost] = useState();

  useEffect(async () => {
    const getPost = await HttpService.getPostNews({ format: 'json', id: params.id });
    setPost(getPost.data[0]);
    console.log(getPost.data[0].imgs);
  }, []);

  return (
    <div className="container">
      {post === undefined ? (
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
          <article style={{ marginBottom: '5rem' }}>
            <h1 className="title">{post.title}</h1>
            <p
              style={{ marginBottom: '3rem' }}
              dangerouslySetInnerHTML={{ __html: post.description }}
            >
            </p>
            <div
              style={{ marginBottom: '3rem' }}
              dangerouslySetInnerHTML={{ __html: post.video }}
            >
            </div>
            {post.imgs.length ? (
              <Carousel initialization={{
                slidesForShow: 3,
                slidesForScroll: 1,
                auto: false,
                interval: 0,
                arrow: true,
              }}
              >
                <div><img src={`${BASE_URL}/${post.img_path}`} alt="" style={{ ...style }} /></div>
                {post.imgs.map((img) => <div><img src={img.path} alt="" style={{ ...style }} /></div>)}
              </Carousel>
            ) : <div><img src={post.img_path} alt="" style={{ ...style }} /></div>}

          </article>
        )}
    </div>

  );
}

export default NewsIdPage;
