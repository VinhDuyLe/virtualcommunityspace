import React, { useState, useEffect } from 'react';
import LocationsAPI from '../services/LocationsAPI';
import { useNavigate } from 'react-router-dom';
import '../css/Locations.css'; 

const Locations = () => {
  const [locations, setLocations] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const locationsData = await LocationsAPI.getAllLocations();
        console.log('Fetched locations:', locationsData); 
        setLocations(locationsData);
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };

    fetchLocations();
  }, []);

  return (
    <div className='available-locations'>
      <div className='location-header'>
        <h2>Available Locations</h2>
      </div>

      {locations.length > 0 ? (
        <ul className='locations-list'>
          {locations.map((location, index) => (
            <li
              key={index}
              onClick={() => navigate(`/locations/${encodeURIComponent(location.location)}`)}
              className='location-item'
            >
              {location.location} {}
            </li>
          ))}
        </ul>
      ) : (
        <p>No locations available.</p>
      )}
    </div>
  );
};

export default Locations;
