import React, { useState, useEffect } from 'react';
import EventsAPI from '../services/EventsAPI'; // Ensure this is correct
import Event from './Event'; // Ensure this is correct

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await EventsAPI.getAllEvents(); // Fetch all events from API
        console.log('Fetched events:', data); // Log fetched data
        setEvents(data); // Update state with event data
      } catch (error) {
        console.error('Error fetching events:', error); // Log any errors
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
              id={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              image={event.image}
              remaining={event.remaining}
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
