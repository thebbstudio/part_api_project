import React, { useEffect, useState } from 'react';
import CardItem from '../components/CardItem';
import PostService from '../http/PostService';

function Park() {
  const [categorySelect, setCategorySelect] = useState(0);
  const [categoryCard, setCategoryCard] = useState([
    {
      id: 1,
      title: 'some title 1some title 1some title 1some title 1',
      img_path: 'http://localhost:3000/img/park/1.jpg',
    },
    {
      id: 2,
      title: 'some title 1some title 1some title 1some title 1',
      img_path: 'http://localhost:3000/img/park/1.jpg',
    },
    {
      id: 3,
      title: 'some title 1some title 1some title 1some title 1',
      img_path: 'http://localhost:3000/img/park/1.jpg',
    },
  ]);

  const [cards, setCards] = useState([]);

  const getCards = async () => {
    const allCards = await PostService.getAll('http://127.0.0.1:8000/patr_api/allstaff?format=json');
    setCards([]);
    setCards(allCards.data);
  };

  useEffect(() => {
    getCards();
  }, []);

  if (categorySelect !== 0) {
    return (
      <div className="container">
        <h1 className="title">Парк</h1>
        <div className="parkCards">
          {categoryCard.map((element) => <CardItem element={element} key={element.id} />)}
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="title">Парк</h1>
      <div className="parkCards">
        {cards.map((element) => <CardItem element={element} key={element.title} />)}
      </div>
    </div>
  );
}

export default Park;
