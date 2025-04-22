// src/components/GuestList.jsx
import React from 'react';

const GuestList = ({ guests, onConfirm }) => {
  return (
    <div>
      <h2>Guest List</h2>

      {guests.length === 0 ? (
        <p>No guests added yet.</p>
      ) : (
        <ul>
          {guests.map((guest) => (
            <li
              key={guest.id}
              className={guest.confirmed ? 'confirmed' : ''}
            >
              <div>
                <strong>{guest.name}</strong> ({guest.email})
              </div>
              <button onClick={() => onConfirm(guest.id)}>
                {guest.confirmed ? 'Unconfirm' : 'Confirm'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GuestList;
