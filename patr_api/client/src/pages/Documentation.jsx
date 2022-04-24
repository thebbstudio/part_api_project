import React, { useEffect, useState } from 'react';
import doc from '../assets/img/doc.svg';
import HttpService from '../http/HttpService';

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
    getDocs();
    sortDocs(docs);
  }, []);
  return (
    <div className="container">
      <h1 className="title">Документы</h1>
      {docs.map((el, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <section className="section" key={index}>
          <h5 className="docs-title">{el[0].category}</h5>
          <ul className="docs-ul">
            {el.map((elem) => (
              <li key={elem.id}>
                <a href={elem.href_string} target="_blank" rel="noreferrer">
                  <img src={doc} alt="doc" />
                  {elem.title}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ))}
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
