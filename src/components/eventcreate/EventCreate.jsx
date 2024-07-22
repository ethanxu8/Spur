import React, { useState, useEffect } from 'react';
import { collection, addDoc, doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase'; // Import Firestore
import './eventcreate.css'; 

const EventCreate = ({ user }) => { // Accept user as a prop
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('');
  const [eventType, setEventType] = useState('Single');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [instructions, setInstructions] = useState('');
  const [username, setUsername] = useState('');
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    const fetchUsername = async () => {
      const userDoc = await getDoc(doc(db, 'users', user.uid));
      if (userDoc.exists()) {
        setUsername(userDoc.data().displayName);
      }
    };
    fetchUsername();
  }, [user]);

  const handlePhotoChange = (e) => {
    if (e.target.files[0]) {
      setPhoto(e.target.files[0]);
    }
  };

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
        startTime,
        endTime,
        instructions,
        userId: user.uid, // Include user ID
        userEmail: user.email, // Include user email 
        username: username, // Include user display name
        photo: photo ? URL.createObjectURL(photo) : null // Include photo if available
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
      setStartTime('');
      setEndTime('');
      setInstructions('');
      setPhoto(null);
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
        <div className="type-buttons">
          <button type="button" className={`type-button ${type === 'Recreation' ? 'active recreation' : 'recreation'}`} onClick={() => setType('Recreation')}>Recreation</button>
          <button type="button" className={`type-button ${type === 'Education' ? 'active education' : 'education'}`} onClick={() => setType('Education')}>Education</button>
          <button type="button" className={`type-button ${type === 'Social' ? 'active social' : 'social'}`} onClick={() => setType('Social')}>Social</button>
        </div>
      </div>
      <div className="event-frequency">
        <label>Single Event or Recurring Event?</label>
        <div className="frequency-buttons">
          <button type="button" className={`type-button ${eventType === 'Single' ? 'active' : ''}`} onClick={() => setEventType('Single')}>Single</button>
          <button type="button" className={`type-button ${eventType === 'Recurring' ? 'active' : ''}`} onClick={() => setEventType('Recurring')}>Recurring</button>
        </div>
      </div>
      <input
        type="text"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Event Location"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <div className="time-container">
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          placeholder="Start Time"
          required
        />
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          placeholder="End Time"
          required
        />
      </div>
      <textarea
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        placeholder="Instructions to Signing Up"
        required
      />
      <div className="photo-upload">
        <label>Upload Photo:</label>
        <input
          type="file"
          onChange={handlePhotoChange}
          accept="image/*"
        />
      </div>
      <button type="submit">Share Your Event!</button>
    </form>
  );
};

export default EventCreate;
