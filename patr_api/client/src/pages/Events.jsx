import React, { useEffect, useState } from 'react';
import PostItem from '../components/PostItem';
import HttpService from '../http/HttpService';

function Events() {
  const [events, setEvents] = useState([]);

  const getEvents = async () => {
    const allEvents = await HttpService.getEvents({ format: 'json' });
    setEvents(allEvents.data);
    // console.log(allEvents.data);
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
