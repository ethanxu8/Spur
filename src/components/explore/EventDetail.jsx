import React from 'react';
import './eventdetail.css';

const EventDetail = ({ event, onBack }) => {
  return (
    <div className="event-detail-container">
      <button className="back-button" onClick={onBack}>Back</button>
      <div className="event-detail">
        <h2>{event.title}</h2>
        <p>{new Date(event.date).toLocaleString()}</p>
        <p>{event.location}</p>
        <p>{event.description}</p>
        <div className="event-meta">
          <span className="event-type">{event.type}</span>
          <span className="event-category">{event.category}</span>
          <span className="event-status">{event.status}</span>
        </div>
        <button className="save-button">Save Event</button>
      </div>
    </div>
  );
};

export default EventDetail;
