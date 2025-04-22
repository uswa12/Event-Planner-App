// src/components/GuestForm.jsx
import React, { useState } from 'react';

const GuestForm = ({ onAddGuest }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) return;

    const newGuest = { name, email };
    onAddGuest(newGuest);

    // Clear form
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add a Guest</h2>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        required
      />
      <button type="submit">Add Guest</button>
    </form>
  );
};

export default GuestForm;
