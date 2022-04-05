import React, { useEffect, useState } from 'react';
import SliderEvents from '../components/Sliders/SliderEvents';
// components
import SliderNews from '../components/Sliders/SliderNews';
import SliderPartners from '../components/Sliders/SliderPartners';
import SliderVideo from '../components/Sliders/SliderVideo';
import PostService from '../http/PostService';

function Home() {
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  const [partners, setPartners] = useState([]);

  const getNews = async () => {
    const allNews = await PostService.getAll('http://127.0.0.1:8000/patr_api/news?format=json');
    setNews(allNews.data);
    // console.log(allNews.data);
  };
  const getEvents = async () => {
    const allEvents = await PostService.getAll('http://127.0.0.1:8000/patr_api/events/?format=json');
    setEvents(allEvents.data);
    // console.log(allEvents.data);
  };
  const getPartners = async () => {
    const allPartners = await PostService.getAll('http://127.0.0.1:8000/patr_api/allpartners?format=json');
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
      <SliderVideo />

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
