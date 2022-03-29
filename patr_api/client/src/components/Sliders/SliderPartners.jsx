import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel';
import MiniaturePartner from '../MiniaturePartner';

function SliderPartners() {
  const [slidesForShow, setSlidesForShow] = useState(() => {
    const width = document.body.offsetWidth;
    if (width >= 1000) {
      return 5;
    }
    if (width < 1000 && width > 750) {
      return 4;
    }
    return 2;
  });
  const [slidesForScroll, setSlidesForScroll] = useState(1);

  useEffect(() => {
    const setSlidesByResolution = setInterval(() => {
      const width = document.body.offsetWidth;
      if (width >= 1000) {
        setSlidesForShow(5);
      }
      if (width < 1000 && width > 750) {
        setSlidesForShow(4);
      }
      if (width <= 750) {
        setSlidesForShow(2);
      }
    }, 2000);
    return () => {
      clearInterval(setSlidesByResolution);
    };
  }, [slidesForShow]);

  return (
    <div className="sliderPartners">
      <Carousel initialization={{ slidesForShow, slidesForScroll }}>
        <MiniaturePartner />
        <MiniaturePartner />
        <MiniaturePartner />
        <MiniaturePartner />
        <MiniaturePartner />
        <MiniaturePartner />
      </Carousel>
    </div>
  );
}

export default SliderPartners;
