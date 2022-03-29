import React from 'react';

import videoForSliderMP4 from '../../assets/video/sliderItem1.mp4';
import videoForSliderWEBM from '../../assets/video/sliderItem1.webm';

function SliderVideo() {
  return (
    <section className="sliderVideo">
      <video autoPlay loop muted>
        <source src={videoForSliderMP4} />
        <source src={videoForSliderWEBM} />
      </video>
    </section>
  );
}

export default SliderVideo;
