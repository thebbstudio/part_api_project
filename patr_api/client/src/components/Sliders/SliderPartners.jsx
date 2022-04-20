import React, { useEffect, useState } from 'react';
import PropType from 'prop-types';
import Carousel from '../Carousel';
import MiniaturePartner from '../MiniaturePartner';

function SliderPartners({ partners }) {
  const [slidesForShow, setSlidesForShow] = useState(() => {
    const width = document.body.offsetWidth;
    if (width >= 1000) {
      return 5;
    }
    if (width < 1000 && width > 750) {
      return 4;
    }
    if (width < 450) {
      return 1;
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
      if (width <= 750 && width > 450) {
        setSlidesForShow(2);
      }
      if (width <= 450) {
        setSlidesForShow(1);
      }
    }, 2000);
    return () => {
      clearInterval(setSlidesByResolution);
    };
  }, [slidesForShow]);

  return (
    <div className="sliderPartners">
      <Carousel initialization={{
        slidesForShow,
        slidesForScroll,
        auto: true,
        interval: 5000,
        arrow: true,
      }}
      >
        {partners.map((onePartner) => (
          <MiniaturePartner partner={onePartner} key={onePartner.id} />
        )) }
      </Carousel>
    </div>
  );
}

SliderPartners.propTypes = {
  partners: PropType.arrayOf(PropType.shape({
    id: PropType.number.isRequired,
    title: PropType.string.isRequired,
    img_path: PropType.string.isRequired,
    href_string: PropType.string.isRequired,
  })).isRequired,
};

export default SliderPartners;
