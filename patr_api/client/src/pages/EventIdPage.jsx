import React from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-spinner-animated';
import Carousel from '../components/Carousel';
import HttpService from '../http/HttpService';
import BASE_URL from '../http/config';

function EventIdPage() {
  const params = useParams();
  const [post, setPost] = React.useState();

  React.useEffect(async () => {
    await HttpService.getPostEvent({ format: 'json', id: params.id })
      .then((res) => setPost(res.data[0]));
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
            <center>
              <div
                style={{ marginBottom: '3rem' }}
                dangerouslySetInnerHTML={{ __html: post.video }}
              >
              </div>
            </center>
            {post.imgs.length ? (
              <Carousel initialization={{
                slidesForShow: 3,
                slidesForScroll: 1,
                auto: false,
                interval: 0,
                arrow: true,
              }}
              >
                {post.imgs.map((img) => (
                  <div>
                    <div style={{ marginLeft: '1rem', marginRight: '1rem', height: '300px' }}>
                      <img
                        src={post.img_path.indexOf('http') === -1 ? (`${BASE_URL}/media/${img.path}`) : (img.path)}
                        alt=""
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                  </div>
                ))}
              </Carousel>
            ) : (
              <center>
                <div>
                  <img
                    src={post.img_path.indexOf('http') === -1 ? (`${BASE_URL}/media/${post.img_path}`) : (post.img_path)}
                    alt=""
                    style={{ height: '300px' }}
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
