import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-spinner-animated';
import Carousel from '../components/Carousel';
import HttpService from '../http/HttpService';
import BASE_URL from '../http/config';

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
            {post.imgs.length ? (
              <Carousel initialization={{
                slidesForShow: 3,
                slidesForScroll: 1,
                auto: false,
                interval: 0,
                arrow: true,
              }}
              >
                <div>
                  <div style={{ marginLeft: '1rem', marginRight: '1rem' }}>
                    <img
                      src={post.img_path.indexOf('http') === -1 ? (`${BASE_URL}/media/${post.img_path}`) : (post.img_path)}
                      alt=""
                      style={{
                        ...style,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                </div>
                {post.imgs.map((img) => (
                  <div style={{ marginLeft: '1rem', marginRight: '1rem' }}>
                    <img
                      src={post.img_path.indexOf('http') === -1 ? (`${BASE_URL}/media/${img.path}`) : (img.path)}
                      alt=""
                      style={{
                        ...style,
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        objectFit: 'cover',
                      }}
                    />
                  </div>
                ))}
              </Carousel>
            ) : (
              <center>
                <div>
                  <img
                    src={post.img_path.indexOf('http') === -1 ? (`${BASE_URL}/media/${post.img_path}`) : (post.img_path)}
                    alt=""
                    style={{ ...style }}
                  />
                </div>
              </center>
            )}
          </article>
        )}
    </div>

  );
}

export default EventIdPage;
