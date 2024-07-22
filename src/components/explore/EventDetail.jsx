import React from 'react';
import './eventdetail.css';

const EventDetail = ({ event, onBack }) => {
  return (
    <div className="event-detail-container">
      <button className="back-button" onClick={onBack}>Back</button>
      <div className="event-detail">
        {event.photo && <img src={event.photo} alt="Event" className="event-photo" />}
        <h2>{event.title}</h2>
        <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
        <p><strong>Time:</strong> {event.startTime} - {event.endTime}</p>
        <p><strong>Location:</strong> {event.location}</p>
        <p>{event.description}</p>
        <div className="event-meta">
          <span className="event-type">{event.type}</span>
        </div>
        <p><strong>Posted by:</strong> {event.username}</p> {/* Display the username */}
        <button className="save-button">Save Event</button>
      </div>
    </div>
  );
};

export default EventDetail;