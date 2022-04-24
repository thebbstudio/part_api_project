import React from 'react';
import PropType from 'prop-types';
import Carousel from '../Carousel';
import MiniatureEvent from '../MiniatureEvent';

function SliderEvents({ events }) {
  const parametersCarousel = {
    slidesForShow: 1,
    slidesForScroll: 1,
  };

  return (
    <div className="sliderEvents">
      <Carousel initialization={parametersCarousel}>
        {events.map((oneEvent) => (
          <MiniatureEvent event={oneEvent} key={oneEvent.id} />
        ))}
      </Carousel>
    </div>

  );
}

SliderEvents.propTypes = {
  events: PropType.arrayOf(PropType.shape({
    id: PropType.number.isRequired,
    title: PropType.string.isRequired,
    description: PropType.string.isRequired,
    img_path: PropType.string.isRequired,
    date_publication: PropType.string.isRequired,
  })).isRequired,
};

export default SliderEvents;
