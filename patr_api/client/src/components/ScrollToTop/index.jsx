/* eslint-disable react/destructuring-assignment */
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop(props) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  // eslint-disable-next-line react/destructuring-assignment
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{props.children}</>;
}

export default ScrollToTop;
