import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import CardItem from '../components/CardItem';
import HttpService from '../http/HttpService';

/*
    TODO: Доделать АПИ
*/

function Park() {
  const params = useParams();
  const categoryCard = [
    {
      id: 1,
      url: 'park',
      title: 'Постоянная экспозиция военной техники',
      img_path: 'http://localhost:3000/img/park/1.jpg',
    },
    {
      id: 2,
      url: 'workout',
      title: 'Воркаут площадка',
      img_path: 'http://localhost:3000/img/park/1.jpg',
    },
    {
      id: 3,
      url: 'pdd',
      title: 'Площадка ПДД',
      img_path: 'http://localhost:3000/img/park/1.jpg',
    },
  ];

  const [cards, setCards] = useState([]);

  const getCards = async (format = 'json') => {
    const allCards = await HttpService.getCards({ format });
    console.log(allCards.data);
    setCards([]);
    setCards(allCards.data);
  };

  const getCards2 = () => {
    setCards(categoryCard);
  };

  useEffect(() => {
    getCards2();

    // getCards();

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
