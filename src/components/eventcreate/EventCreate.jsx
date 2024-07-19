import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase'; // Import Firestore
import './eventcreate.css'; 

const EventCreate = ({ user }) => { // Accept user as a prop
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [eventType, setEventType] = useState('Single');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      const eventData = {
        title,
        description,
        type,
        eventType,
        location,
        date,
        instructions,
        userId: user.uid, // Include user ID
        userEmail: user.email // Include user email 
      };
      console.log('Event data to be submitted:', eventData); // Log event data

      // Add a new document to the 'events' collection with the form data
      const docRef = await addDoc(collection(db, 'events'), eventData);

      console.log('Event created with ID: ', docRef.id);
      // Reset form fields after submission
      setTitle('');
      setDescription('');
      setType('');
      setEventType('Single');
      setLocation('');
      setDate('');
      setInstructions('');
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="event-create-form">
      <h2>Host an Event!</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Event Name"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Event Description"
        required
      />
      <div className="event-type">
        <label>Event Type:</label>
        <button type="button" className={`type-button ${type === 'Recreation' ? 'active' : ''}`} onClick={() => setType('Recreation')}>Recreation</button>
        <button type="button" className={`type-button ${type === 'Education' ? 'active' : ''}`} onClick={() => setType('Education')}>Education</button>
        <button type="button" className={`type-button ${type === 'Social' ? 'active' : ''}`} onClick={() => setType('Social')}>Social</button>
      </div>
      <div className="event-frequency">
        <label>Single Event or Recurring Event?</label>
        <button type="button" className={`type-button ${eventType === 'Single' ? 'active' : ''}`} onClick={() => setEventType('Single')}>Single</button>
        <button type="button" className={`type-button ${eventType === 'Recurring' ? 'active' : ''}`} onClick={() => setEventType('Recurring')}>Recurring</button>
      </div>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Event Location"
        required
      />
      <input
        type="datetime-local"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Instructions to Signing Up"
        required
      />
      <button type="submit">Share Your Event!</button>
    </form>
  );
};

export default EventCreate;
