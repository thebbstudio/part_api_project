import React, { useEffect, useState } from 'react';
import Carousel from '../Carousel';
import MiniatureNew from '../MiniatureNew';

function SliderNews() {
  const [slidesForShow, setSlidesForShow] = useState(() => {
    const width = document.body.offsetWidth;
    if (width >= 1000) {
      return 3;
    }
    if (width < 1000 && width > 750) {
      return 2;
    }
    return 1;
  });
  const [slidesForScroll, setSlidesForScroll] = useState(1);

  useEffect(() => {
    const setSlidesByResolution = setInterval(() => {
      const width = document.body.offsetWidth;
      if (width >= 1000) {
        setSlidesForShow(3);
      }
      if (width < 1000 && width > 750) {
        setSlidesForShow(2);
      }
      if (width <= 750) {
        setSlidesForShow(1);
      }
    }, 2000);
    return () => {
      clearInterval(setSlidesByResolution);
    };
  }, [slidesForShow]);

  return (
    <div className="sliderNews">
      <Carousel initialization={{ slidesForShow, slidesForScroll }}>
        <MiniatureNew />
        <MiniatureNew />
        <MiniatureNew />
        <MiniatureNew />
      </Carousel>
    </div>
  );
}

export default SliderNews;
