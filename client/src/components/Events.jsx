import React, { useState, useEffect } from 'react';
import EventsAPI from '../services/EventsAPI'; 
import Event from './Event'; 

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await EventsAPI.getAllEvents(); // Fetch all events from API
        console.log('Fetched events:', data); 
        setEvents(data); 
      } catch (error) {
        console.error('Error fetching events:', error); 
      }
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h1>All Events</h1>
      {events.length > 0 ? (
        <ul>
          {events.map((event) => (
            <Event
              key={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              image={event.image}
              remaining={
                event.remaining
                  ? `${event.remaining.days || 0} days, ${event.remaining.hours || 0} hours`
                  : 'No remaining time available'
              }
            />
          ))}
        </ul>
      ) : (
        <p>No events available.</p>
      )}
    </div>
  );
};

export default Events;
