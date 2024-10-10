import React, { useState, useEffect } from 'react';
import LocationsAPI from '../services/LocationsAPI';  
import { Link } from 'react-router-dom';

const LocationList = () => {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const data = await LocationsAPI.getAllLocations();
        setLocations(data);  
      } catch (error) {
        console.error('Error fetching locations:', error);
      }
    };
    fetchLocations();
  }, []);

  return (
    <div>
      <h2>All Locations</h2>
      {locations.length > 0 ? (
        <ul>
          {locations.map((location) => (
            <li key={location.id}>
              <Link to={`/locations/${encodeURIComponent(location.name)}`}>
                {location.name}
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No locations available.</p>
      )}
    </div>
  );
};

export default LocationList;
