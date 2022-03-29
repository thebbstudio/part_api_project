import React from 'react';
import logo from '../../assets/img/forPartners/bbslogop.jpg';
import cl from './MiniaturePartner.module.css';

function MiniaturePartner({ style }) {
  return (
    <div style={{ ...style }}>
      <img className={cl.img} src={logo} alt="burning bear studio" />
    </div>
  );
}

export default MiniaturePartner;
