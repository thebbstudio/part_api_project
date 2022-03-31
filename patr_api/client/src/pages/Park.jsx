import React, { useState } from 'react';
import CardItem from '../components/CardItem';

function Park() {
  const [cards, setCards] = useState([
    {
      title: 'some title 1some title 1some title 1some title 1',
      srcForImg: 'http://localhost:3000/img/park/1.jpg',
      alt: 'some alt for image',
    },
    {
      title: 'some title 2',
      srcForImg: 'http://localhost:3000/img/park/1.jpg',
      alt: 'some alt for image',
    },
    {
      title: 'some title 3',
      srcForImg: 'http://localhost:3000/img/park/1.jpg',
      alt: 'some alt for image',
    },
  ]);

  return (
    <div className="container">
      <h1 className="title">Парк</h1>
      <div className="parkCards">
        {cards.map((element) => <CardItem key={element.title} element={element} />)}
      </div>
    </div>
  );
}

export default Park;
