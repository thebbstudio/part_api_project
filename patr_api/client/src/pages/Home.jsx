import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Spinner } from 'react-spinner-animated';

import HttpService from '../http/HttpService';
import SliderEvents from '../components/Sliders/SliderEvents';
import SliderNews from '../components/Sliders/SliderNews';
import SliderPartners from '../components/Sliders/SliderPartners';
import SliderVideo from '../components/Sliders/SliderVideo';

function Home() {
  const [news, setNews] = useState(null);
  const [events, setEvents] = useState(null);
  const [partners, setPartners] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
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

    const fetchAllData = async () => {
      setIsLoading(true);
      await Promise.allSettled([getNews(), getEvents(), getPartners()]);
      setIsLoading(false);
    };

    fetchAllData();
  }, []);

  useLayoutEffect(() => {
    if (isLoading) {
      return;
    }

    const $spinner = document.querySelector('#upper');

    if ($spinner) {
      $spinner.style.stroke = '#378b73';
    }
  }, [isLoading]);

  console.log('');

  return (
    <div className="container">
      <iframe title="widget" src="pos.widget.html" style={{ width: '100%', height: '350px' }} />
      <section className="videos">
        <SliderVideo />
      </section>

      {isLoading && (
        <div style={{ height: '300px' }}>
          <center>
            <Spinner text="Загрузка..." width="100px" height="100px" center={false} />
          </center>
        </div>
      )}

      <section className="news">
        <h2 className="title">Новости</h2>
        {!!news && <SliderNews news={news} />}
      </section>

      <section className="events">
        <h2 className="title">Мероприятия</h2>
        {!!events && <SliderEvents events={events} />}
      </section>

      <section className="partners">
        <h2 className="title">Партнеры</h2>
        {!!partners && <SliderPartners partners={partners} />}
      </section>
    </div>
  );
}

export default Home;
