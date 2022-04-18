import React, { useEffect, useState } from 'react';
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
    // console.log(allNews.data);
  };
  const getEvents = async () => {
    const allEvents = await HttpService.getEvents({ format: 'json' });
    setEvents(allEvents.data);
    // console.log(allEvents.data);
  };
  const getPartners = async () => {
    const allPartners = await HttpService.getPartners({ format: 'json' });
    setPartners(allPartners.data);
    // console.log(allPartners.data);
  };

  const getAll = () => {
    getNews();
    getEvents();
    getPartners();
  };

  useEffect(() => {
    getAll();
  }, []);

  return (
    <div className="container">
      <section className="videos">
        <SliderVideo />
      </section>

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

    </div>
  );
}

export default Home;
