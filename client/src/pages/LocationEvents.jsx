import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; 
import EventsAPI from '../services/EventsAPI'; 
import '../css/LocationEvents.css';
import Event from '../components/Event';

const LocationEvents = () => {
  const { venueId } = useParams(); 
  const [location, setLocation] = useState({});
  const [events, setEvents] = useState([]);

  useEffect(() => {

    const fetchLocationEvents = async () => {
      try {
        const eventsData = await EventsAPI.getEventsByLocation(venueId);
        if (eventsData.length > 0) {
          setLocation({
            name: eventsData[0].location,
            
            image: '/path/to/default/image.jpg',
          });
          setEvents(eventsData);
        }
      } catch (error) {
        console.error('Error fetching events for location:', error);
      }
    };

    fetchLocationEvents();
  }, [venueId]);

  return (
    <div className='location-events'>
      <header>
        <div className='location-image'>
          <img src={location.image} alt={location.name} />
        </div>

        <div className='location-info'>
          <h2>{location.name}</h2>
        </div>
      </header>

      <main>
        {events.length > 0 ? (
          events.map((event) => (
            <Event
              key={event.id}
              id={event.id}
              title={event.title}
              date={event.date}
              time={event.time}
              image={event.image}
            />
          ))
        ) : (
          <h2>
            <i className="fa-regular fa-calendar-xmark fa-shake"></i> No events scheduled at this location yet!
          </h2>
        )}
      </main>
    </div>
  );
};

export default LocationEvents;
