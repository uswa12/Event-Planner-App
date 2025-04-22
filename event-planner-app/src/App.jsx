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
      id: Date.now(),
      confirmed: false,
      isEditing: false,  // Track if the guest is being edited
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

  const removeGuest = (id) => {
    setGuests(prev => prev.filter(guest => guest.id !== id));
  };

  const toggleEdit = (id) => {
    setGuests(prev =>
      prev.map(guest =>
        guest.id === id ? { ...guest, isEditing: !guest.isEditing } : guest
      )
    );
  };

  const updateGuestInfo = (id, name, email) => {
    setGuests(prev =>
      prev.map(guest =>
        guest.id === id ? { ...guest, name, email, isEditing: false } : guest
      )
    );
  };

  return (
    <div className="App">
      <h1>🎉 Event Planner</h1>
      <GuestForm onAddGuest={addGuest} />
      <RSVPSummary guests={guests} />
      <GuestList
        guests={guests}
        onConfirm={toggleConfirmation}
        onRemove={removeGuest}
        onEdit={toggleEdit}
        onUpdate={updateGuestInfo}
      />
    </div>
  );
};

export default App;
