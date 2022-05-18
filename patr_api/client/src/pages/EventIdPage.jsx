import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-spinner-animated';
import Carousel from '../components/Carousel';
import HttpService from '../http/HttpService';
import img1 from './imgs/1.jpg';
import img2 from './imgs/2.jpg';
import img3 from './imgs/3.jpg';

const style = {
  height: '300px',
};

function EventIdPage() {
  const params = useParams();
  const [post, setPost] = useState();

  useEffect(async () => {
    const getPost = await HttpService.getPostEvent({ format: 'json', id: params.id });
    setPost(getPost.data[0]);
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
            <Carousel initialization={{
              slidesForShow: 3,
              slidesForScroll: 1,
              auto: false,
              interval: 0,
              arrow: true,
            }}
            >
              <div><img src={img2} alt="" style={{ ...style }} /></div>
              <div><img src={img3} alt="" style={{ ...style }} /></div>
              <div><img src={img1} alt="" style={{ ...style }} /></div>
            </Carousel>
          </article>
        )}
    </div>

  );
}

export default EventIdPage;
