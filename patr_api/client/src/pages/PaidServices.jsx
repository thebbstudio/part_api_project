import React from 'react';
import Modal from '../components/Modal';
import PaidForm from '../components/PaidForm';

function PaidServices() {
  return (
    <div className="container">
      <h1 className="title">Платные услуги</h1>
      <a href="#openModal">Открыть модальное окно</a>
      <Modal title="пеинтбол">
        <PaidForm />
      </Modal>
    </div>
  );
}

export default PaidServices;
