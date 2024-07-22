import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; // Ensure the path to firebase is correct
import './explore.css'; // Ensure the path to explore.css is correct
import EventDetail from './EventDetail'; // Ensure the path to EventDetail is correct

const Explore = ({ user }) => { // Add user as a prop
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      const eventsCollection = collection(db, 'events');
      const eventsSnapshot = await getDocs(eventsCollection);
      const eventsList = eventsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEvents(eventsList);
    };

    fetchEvents();
  }, []);

  if (selectedEvent) {
    return <EventDetail event={selectedEvent} onBack={() => setSelectedEvent(null)} user={user} />;
  }

  return (
    <div className="explore-container">
      <h2>Explore, For You!</h2>
      <div className="events-list">
        {events.map(event => (
          <div key={event.id} className="event-item" onClick={() => setSelectedEvent(event)}>
            {event.photo && <img src={event.photo} alt="Event" className="event-thumbnail" />}
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <div className="event-details">
              <p><strong>Type:</strong> {event.type}</p>
              <p><strong>Date:</strong> {new Date(event.date).toLocaleDateString()}</p>
              <p><strong>Time:</strong> {event.startTime} - {event.endTime}</p>
              <p><strong>Location:</strong> {event.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
