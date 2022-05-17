import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-spinner-animated';
import SliderEvents from '../components/Sliders/SliderEvents';
// components
import SliderNews from '../components/Sliders/SliderNews';
import SliderPartners from '../components/Sliders/SliderPartners';
import SliderVideo from '../components/Sliders/SliderVideo';
import HttpService from '../http/HttpService';

function Home() {
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  const [partners, setPartners] = useState([]);

  const getNews = async () => {
    const allNews = await HttpService.getNews({ format: 'json' });
    setNews(allNews.data);
  };
  const getEvents = async () => {
    const allEvents = await HttpService.getEvents({ format: 'json' });
    setEvents(allEvents.data);
  };
  const getPartners = async () => {
    const allPartners = await HttpService.getPartners({ format: 'json' });
    setPartners(allPartners.data);
  };

  const getAll = () => {
    getNews();
    getEvents();
    getPartners();
  };

  useEffect(() => {
    document.querySelector('#upper').style.stroke = '#378b73';
    getAll();
  }, []);

  return (
    <div className="container">
      <section className="videos">
        <SliderVideo />
      </section>

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
          <>
            <section className="news">
              <h2 className="title">Новости</h2>
              <SliderNews news={news} />
            </section>

            <section className="events">
              <h2 className="title">Мероприятия</h2>
              <SliderEvents events={events} />
            </section>

            <section className="partners">
              <h2 className="title">Партнеры</h2>
              <SliderPartners partners={partners} />
            </section>
          </>
        )}

    </div>
  );
}

export default Home;
