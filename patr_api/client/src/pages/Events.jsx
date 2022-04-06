import React, { useEffect, useState } from 'react';
import PostItem from '../components/PostItem';
import PostService from '../http/PostService';

function Events() {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const allEvents = await PostService.getAll('http://127.0.0.1:8000/patr_api/events/?format=json');
    setEvents(allEvents.data);
  };

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Мероприятия</h1>
      {events.map((post) => <PostItem post={post} key={post.id} />)}
    </div>
  );
}

export default Events;
