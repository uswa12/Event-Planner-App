// src/App.jsx
import React, { useState, useEffect } from 'react';
import GuestForm from './components/GuestForm';
import GuestList from './components/GuestList';
import RSVPSummary from './components/RSVPSummary';
import './App.css';


const App = () => {
  const [guests, setGuests] = useState([]);

  useEffect(() => {
    console.log('Guests updated (useEffect):', guests);
  }, [guests]);
  
  const addGuest = (guest) => {
    const newGuest = {
      ...guest,
      id: Date.now(), // unique ID
      confirmed: false,
    }; 
    setGuests([...guests, newGuest]);
  };

  const toggleConfirmation = (id) => {
    setGuests(prev =>
      prev.map(guest =>
        guest.id === id ? { ...guest, confirmed: !guest.confirmed } : guest
      )
    );
  
    // ❗ This will show the OLD value of guests
    console.log('Guests right after toggle (before re-render):', guests);
  };
  

  return (
    <div className="App">
      <h1>🎉 Event Planner</h1>
      <GuestForm onAddGuest={addGuest} />
      <RSVPSummary guests={guests} />
      <GuestList guests={guests} onConfirm={toggleConfirmation} />
    </div>
  );
};

export default App;
