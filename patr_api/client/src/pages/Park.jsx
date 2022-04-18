import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardItem from '../components/CardItem';
import HttpService from '../http/HttpService';

function Park() {
  const params = useParams();
  const [cards, setCards] = useState([]);

  const getCards = async (format = 'json', type = params.type ? params.type : '') => {
    const allCards = await HttpService.getCards({
      format,
      type,
    });
    console.log(allCards.data);
    setCards([]);
    setCards(allCards.data);
  };

  useEffect(() => {
    getCards();
    console.log(params);
  }, [params]);

  return (
    <div className="container">
      <h1 className="title">Парк</h1>
      <div className="parkCards">
        {cards.map((element) => (
          <CardItem card={element} key={element.id} />
        ))}
      </div>
    </div>
  );
}

export default Park;
