import React from 'react';

function Contacts({ cl }) {
  return (
    <div className={cl.contacts}>
      <section>
        <h6>Контактный телефон:</h6>
        <a href="tel:+7343466040">+7 (34342)6-60-40</a>
      </section>
      <section>
        <h6>Электронная почта:</h6>
        <a href="mailto:cpvdm@edu-lesnoy.ru">cpvdm@edu-lesnoy.ru</a>
      </section>
    </div>
  );
}

export default Contacts;
