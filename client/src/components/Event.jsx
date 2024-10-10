import React from 'react';
import '../css/Event.css';

const Event = ({ title, date, time, image, remaining }) => {
  const formattedDate = new Date(date).toLocaleDateString(); 
  const formattedTime = new Date(`1970-01-01T${time}Z`).toLocaleTimeString(); 

  return (
    <article className='event-information'>
      {}
      <img src={image} alt={title} />

      <div className='event-information-overlay'>
        <div className='text'>
          <h3>{title}</h3>
          <p>
            <i className="fa-regular fa-calendar fa-bounce"></i> {formattedDate} <br /> {formattedTime}
          </p>
          {}
          <p>{remaining || 'No remaining time available'}</p>
        </div>
      </div>
    </article>
  );
};

export default Event;
