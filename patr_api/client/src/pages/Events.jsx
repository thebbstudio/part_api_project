import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-spinner-animated';
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
    document.querySelector('#upper').style.stroke = '#378b73';
    getEvents();
  }, []);

  return (
    <div className="container">
      <h1 className="title">Мероприятия</h1>
      {events[0] === undefined ? (
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
      ) : (
        events.map((post) => <PostItem post={post} key={post.id} />)
      )}
    </div>
  );
}

export default Events;
