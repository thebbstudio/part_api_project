import React from 'react';
import cl from './Modal.module.css';

function Modal({ children, title }) {
  return (
    <div id="openModal" className={cl.modal}>
      <div className={cl.modalDialog}>
        <div className={cl.modalContent}>
          <div className={cl.modalHeader}>
            <h3 className={cl.modalTitle}>
              Отправить заявку на
              {' '}
              {title}
            </h3>
            <a href="#close" title="Close" className={cl.close}>×</a>
          </div>
          <div className={cl.modalBody}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
