/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-spinner-animated';
import doc from '../assets/img/doc.svg';
import HttpService from '../http/HttpService';
import BASE_URL from '../http/config';

function Documentation() {
  const [docs, setDocs] = useState([]);

  const sortDocs = (allDocs) => {
    const categories = allDocs.map((el) => el.category);
    const exclusiveCategories = new Set([...categories]);
    const allSortedDocs = [];
    exclusiveCategories.forEach((el) => {
      allSortedDocs.push(allDocs.filter((elem) => elem.category === el));
    });
    setDocs(allSortedDocs);
  };
  const getDocs = async () => {
    const allDocs = await HttpService.getDocs({ format: 'json' });
    sortDocs(allDocs.data);
  };

  useEffect(() => {
    document.querySelector('#upper').style.stroke = '#378b73';
    getDocs();
    sortDocs(docs);
  }, []);
  return (
    <div className="container">
      <h1 className="title">Документы</h1>
      {docs[0] === undefined ? (
        <div style={{ height: '300px' }}>
          <center>
            <Spinner
              text="Загрузка..."
              width="100px"
              height="100px"
              center={false}
            />
          </center>
        </div>
      )
        : (
          docs.map((el, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <section className="section" key={index}>
              <h5 className="docs-title">{el[0].category}</h5>
              <ul className="docs-ul">
                {el.map((elem) => (
                  <li key={elem.id}>
                    <a href={`${BASE_URL}/media/${elem.href_string}`} target="_blank" rel="noreferrer">
                      <img src={doc} alt="doc" />
                      {elem.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))
        )}

      <h5 className="docs-title">Профилактика ВИЧ-инфекции</h5>
      <div className="docs-text">
        <div>
          <a href="https://livehiv.ru/" target="_blank" rel="noreferrer">ОЦ СПИД</a>
        </div>
        <div>
          <a href="https://o-spide.ru/" target="_blank" rel="noreferrer">О СПИДЕ</a>
        </div>
      </div>

      <h5 className="docs-title">Противодействие коррупции</h5>
      <p className="docs-text">
        "Телефон доверия" по вопросам профилактики коррупционных и иных правонарушений в Администрации Губернатора Свердловской области: <a href="tel:+73433707202">8(343)370-72-02</a> <br />
        "Телефон доверия" для обращения в целях оперативного доведения информации о коррупционных проявлениях среди муниципальных органов местного самоуправления городского органа "Город Лесной": <a href="tel:+73434226864">8(34342)2-68-64</a> <br />
        Телефон директора МБУ ЦПВДМ, председателя комиссии по противодействию коррупции – <a href="tel:+73434266040">8 (34342) 6-60-40</a> <br />
        Направить электронное сообщение по адресу <a href="mailto:cpvdm@edu-lesnoy.ru">cpvdm@edu-lesnoy.ru</a> ; <br />
        Направить письменное обращение по адресу: 624200, Свердловская область, г. Лесной, ул. Кирова, 20.
      </p>
    </div>
  );
}

export default Documentation;
