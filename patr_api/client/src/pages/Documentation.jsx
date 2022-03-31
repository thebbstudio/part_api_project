import React from 'react';
import doc from '../assets/img/doc.svg';

function Documentation() {
  return (
    <div className="container">
      <h1 className="title">Документы</h1>
      <h5 className="docs-title">Финансово-хозяйственная деятельность</h5>
      <ul className="docs-ul">
        <li>
          <a href="#">
            <img src={doc} alt="doc" />
            Какое-то название документа
          </a>
        </li>
        <li>
          <a href="#">
            <img src={doc} alt="doc" />
            Какое-то название документа
          </a>
        </li>
        <li>
          <a href="#">
            <img src={doc} alt="doc" />
            Какое-то название документа
          </a>
        </li>
        <li>
          <a href="#">
            <img src={doc} alt="doc" />
            Какое-то название документа
          </a>
        </li>
      </ul>

      <h5 className="docs-title">Противодействие коррупции</h5>
      <p className="docs-text">
        Уважаемые граждане! Если вам стало известно о фактах проявления коррупции, Вы можете:
        <br />
        – обратиться по телефону “горячей линии”:
        {' '}
        <a href="tel:83434266040">8 (34342) 6-60-40</a>
        ;

        <br />
        – направить электронное сообщение по адресу
        {' '}
        <a href="mailto:cpvdm@edu-lesnoy.ru">cpvdm@edu-lesnoy.ru</a>
        ;

        <br />
        – направить письменное обращение по адресу:
        624200, Свердловская область, г. Лесной, ул. Кирова, 20.

      </p>
    </div>
  );
}

export default Documentation;
