import React, { useState } from 'react';
import CardItem from '../components/CardItem';

const style = {
  display: 'flex',
  flexWrap: 'wrap',
  marginBottom: '70px',
};

function Park() {
  const [cards, setCards] = useState([
    {
      title: 'some title 1',
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
      <div style={{ ...style }}>
        {cards.map((el) => <CardItem key={el.title} el={el} />)}
      </div>
    </div>
  );
}

export default Park;
