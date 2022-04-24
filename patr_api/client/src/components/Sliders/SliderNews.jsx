import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import Carousel from '../Carousel';
import MiniatureNew from '../MiniatureNew';

function SliderNews({ news }) {
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
        {news.map((oneNews) => (
          <MiniatureNew news={oneNews} key={oneNews.id} />
        ))}
      </Carousel>
    </div>
  );
}

SliderNews.propTypes = {
  news: PropType.arrayOf(PropType.shape({
    id: PropType.number.isRequired,
    title: PropType.string.isRequired,
    description: PropType.string.isRequired,
    img_path: PropType.string.isRequired,
    date_publication: PropType.string.isRequired,
  })).isRequired,
};

export default SliderNews;
