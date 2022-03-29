import React from 'react';
import Carousel from '../Carousel';
import MiniatureEvent from '../MiniatureEvent';

function SliderEvents() {
  const parametersCarousel = {
    slidesForShow: 1,
    slidesForScroll: 1,
  };

  return (
    <div className="sliderEvents">
      <Carousel initialization={parametersCarousel}>
        <MiniatureEvent />
        <MiniatureEvent />
      </Carousel>
    </div>

  );
}

export default SliderEvents;
