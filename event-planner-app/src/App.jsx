// src/App.jsx
import React, { useState } from 'react';
import GuestForm from './components/GuestForm';
import GuestList from './components/GuestList';
import './App.css';


const App = () => {
  const [guests, setGuests] = useState([]);

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
  };

  return (
    <div className="App">
      <h1>🎉 Event Planner</h1>
      <GuestForm onAddGuest={addGuest} />
      <GuestList guests={guests} onConfirm={toggleConfirmation} />
    </div>
  );
};

export default App;
