import React from 'react';
import SliderEvents from '../components/Sliders/SliderEvents';
// components
import SliderNews from '../components/Sliders/SliderNews';
import SliderPartners from '../components/Sliders/SliderPartners';
import SliderVideo from '../components/Sliders/SliderVideo';

function Home() {
  return (
    <div className="container">
      <SliderVideo />

      <section className="news">
        <h2 className="title">Новости</h2>
        <SliderNews />
      </section>

      <section className="events">
        <h2 className="title">Мероприятия</h2>
        <SliderEvents />
      </section>

      <section className="partners">
        <h2 className="title">Партнеры</h2>
        <SliderPartners />
      </section>

    </div>
  );
}

export default Home;
