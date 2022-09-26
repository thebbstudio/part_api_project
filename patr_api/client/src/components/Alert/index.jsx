import React, { useState } from 'react';
import cl from './Alert.module.css';

function Alert({ children }) {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className={`${cl.alert} ${!isVisible ? 'hidden' : ''}`}>
      <div className={`${cl.box} ${cl.green}`}>
        <div className={cl.text}>{children}</div>
        <div className={cl.button}>
          {/*  eslint-disable-next-line jsx-a11y/control-has-associated-label */}
          <button type="button" onClick={() => setIsVisible(!isVisible)}></button>
        </div>
      </div>
    </div>
  );
}

export default Alert;
