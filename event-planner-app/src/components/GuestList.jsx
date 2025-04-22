import React from 'react';

const GuestList = ({ guests, onConfirm }) => {
  return (
    <div>
      <h2>Guest List</h2>

      {guests.length === 0 ? (
        <p>No guests added yet.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {guests.map((guest) => (
            <li
              key={guest.id}
              className={guest.confirmed ? 'confirmed' : 'unconfirmed'}
              style={{
                backgroundColor: guest.confirmed ? '#e6ffed' : '#fff',
                padding: '12px',
                marginBottom: '10px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}
            >
              <div>
                <strong>{guest.name}</strong> ({guest.email})
              </div>
              <button
                onClick={() => onConfirm(guest.id)}
                style={{
                  padding: '6px 12px',
                  backgroundColor: guest.confirmed ? '#dc3545' : '#198754',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer'
                }}
              >
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
