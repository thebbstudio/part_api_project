import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner } from 'react-spinner-animated';
import CardItem from '../components/CardItem';
import HttpService from '../http/HttpService';

function Park() {
  const params = useParams();
  console.log(params);
  const [cards, setCards] = useState([]);

  const getCards = async (format = 'json', type = params.type ? params.type : '') => {
    const allCards = await HttpService.getCards({
      format,
      type,
    });
    setCards([]);
    setCards(allCards.data);
  };

  useEffect(() => {
    document.querySelector('#upper').style.stroke = '#378b73';
    getCards();
  }, [params]);

  return (
    <div className="container">
      <h1 className="title">Парк</h1>
      {cards[0] === undefined ? (
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
          <div className="parkCards">
            {cards.map((element) => (
              <CardItem card={element} key={element.id} />
            ))}
          </div>
        )}
    </div>
  );
}

export default Park;
