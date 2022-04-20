import React from 'react';

import videoForSliderMP4 from '../../assets/video/sliderItem1.mp4';
import videoForSliderWEBM from '../../assets/video/sliderItem1.webm';
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
          <source src={videoForSliderMP4} />
          <source src={videoForSliderWEBM} />
        </video>
        <video autoPlay loop muted>
          <source src={videoForSliderMP4} />
          <source src={videoForSliderWEBM} />
        </video>
      </Carousel>
    </section>
  );
}

export default SliderVideo;
