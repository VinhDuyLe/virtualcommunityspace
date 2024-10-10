import React from 'react';
import { useRoutes, Link } from 'react-router-dom';
import Locations from './pages/Locations';
import LocationEvents from './pages/LocationEvents';
import Events from './components/Events'; // Import the new Events.jsx
import './App.css';

const App = () => {
  let element = useRoutes([
    {
      path: '/',
      element: <Locations />
    },
    {
      path: '/locations/:venueId',
      element: <LocationEvents />
    },
    {
      path: '/events',  // The route for displaying all events
      element: <Events />  // Use the new Events.jsx component
    }
  ]);

  return (
    <div className='app'>
      <header className='main-header'>
        <h1>UnityGrid Plaza</h1>

        <div className='header-buttons'>
          <Link to='/' role='button'>Home</Link>
          <Link to='/events' role='button'>Events</Link>
        </div>
      </header>

      <main>
        {element}
      </main>
    </div>
  );
};

export default App;
