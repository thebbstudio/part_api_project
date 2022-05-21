import React from 'react';
import PropType from 'prop-types';
import cl from './MiniaturePartner.module.css';

function MiniaturePartner({ style, partner }) {
  return (
    <a style={{ ...style }} href={partner.href_string} target="_blank" rel="noreferrer">
      <div>
        <img className={cl.img} src={`media/${partner.img_path}`} alt={partner.title} />
      </div>
    </a>
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
