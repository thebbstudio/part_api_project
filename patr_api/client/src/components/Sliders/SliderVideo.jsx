import React from 'react';
import Carousel from '../Carousel';

function SliderVideo() {
  const parametersCarousel = {
    slidesForShow: 1,
    slidesForScroll: 1,
    auto: true,
    interval: 15000,
    arrow: false,
  };

  return (
    <section className="sliderVideo">
      <Carousel initialization={parametersCarousel}>
        <video autoPlay loop muted>
          <source src="media/video/sliderItem1.mp4" />
          <source src="media/video/sliderItem1.webm" />
        </video>
        <video autoPlay loop muted>
          <source src="media/video/sliderItem2.mp4" />
          <source src="media/video/sliderItem2.webm" />
        </video>
        <video autoPlay loop muted>
          <source src="media/video/sliderItem3.mp4" />
          <source src="media/video/sliderItem3.webm" />
        </video>
        <video autoPlay loop muted>
          <source src="media/video/sliderItem4.mp4" />
          <source src="media/video/sliderItem4.webm" />
        </video>
      </Carousel>
    </section>
  );
}

export default SliderVideo;
