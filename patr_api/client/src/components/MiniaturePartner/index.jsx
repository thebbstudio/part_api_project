import React from 'react';
import PropType from 'prop-types';
// import logo from '../../assets/img/forPartners/bbslogop.jpg';
import cl from './MiniaturePartner.module.css';

function MiniaturePartner({ style, partner }) {
  return (
    <div style={{ ...style }}>
      <img className={cl.img} src={partner.img_path} alt={partner.title} />
    </div>
  );
}

MiniaturePartner.defaultProps = {
  style: {
    maxWidth: '20%',
  },
};

MiniaturePartner.propTypes = {
  style: PropType.shape({ maxWidth: PropType.string }),
  partner: PropType.shape({
    id: PropType.number.isRequired,
    title: PropType.string.isRequired,
    img_path: PropType.string.isRequired,
    href_string: PropType.string.isRequired,

  }).isRequired,
};

export default MiniaturePartner;
