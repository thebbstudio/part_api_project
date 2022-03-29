/*
  Для того, чтобы задать параметры карусели,
  нужно в родительском компоненте создать объект с полями
  и передать в качестве параметра

  const obj = {
    slidesForShow: number    ---- кол-во элементов на экране
    slidesForScroll: number  ---- Количество проскролленных элементов за нажатие
  }
*/

import React, {
  Children,
  useState,
  cloneElement,
  useEffect,
  useRef,
} from 'react';

import cl from './Carousel.module.css';

function Carousel({ children, initialization = {} }) {
  const [pages, setPages] = useState([]);
  const [offset, setOffset] = useState(0);
  const divWindow = useRef();

  let {
    slidesForShow, slidesForScroll, auto = false, interval = 5000,
  } = initialization;

  let widthOfOneSlide = 100 / slidesForShow;
  let widthOfSlidesForScrolling = widthOfOneSlide * slidesForScroll;
  let maxWidth = widthOfOneSlide * pages.length;
  let [startPosition, endPosition] = [0, -maxWidth + 100];

  useEffect(() => {
    setPages(Children.map(children, (el) => cloneElement(el, {
      style: {
        height: '100%',
        minWidth: `${widthOfOneSlide}%`,
        maxWidth: `${widthOfOneSlide}%`,
      },
    })));
  }, [initialization]);

  const handleSlideLeft = () => {
    setOffset((currentOffset) => {
      if (-currentOffset - widthOfOneSlide >= startPosition) {
        return currentOffset + widthOfSlidesForScrolling;
      }
      return endPosition;
    });
  };
  const handleSlideRight = () => {
    setOffset((currentOffset) => {
      if (currentOffset - widthOfOneSlide >= endPosition) {
        return currentOffset - widthOfSlidesForScrolling;
      }
      return startPosition;
    });
  };

  const autoSlide = () => {
    if (auto) {
      setInterval(handleSlideRight(), interval);
    }
    return false;
  };

  autoSlide();

  return (
    <div className={cl.main}>
      <button
        type="button"
        onClick={() => handleSlideLeft()}
        className={cl.btn}
      >
        <svg
          className={`${cl.svg} ${cl.svgLeft}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 284.929 284.929"
          xmlSpace="preserve"
        >
          <g>
            <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
                    L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
                    c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
                    c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"
            />
          </g>
        </svg>
      </button>

      <div className={cl.window} ref={divWindow}>
        <div
          className={cl.lenta}
          style={{ transform: `translateX(${offset}%)` }}
        >
          {pages}
        </div>
      </div>

      <button
        type="button"
        onClick={() => handleSlideRight()}
        className={cl.btn}
      >
        <svg
          className={`${cl.svg} ${cl.svgRight}`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 284.929 284.929"
          xmlSpace="preserve"
        >
          <g>
            <path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
                    L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
                    c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
                    c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"
            />
          </g>
        </svg>
      </button>
    </div>
  );
}

export default Carousel;
