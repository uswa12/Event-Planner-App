// src/components/GuestList.jsx
import React from 'react';

const GuestList = ({ guests, onConfirm, onRemove, onEdit, onUpdate }) => {
  return (
    <div>
      <h2>Guest List</h2>

      {/* Conditional Rendering: If no guests */}
      {guests.length === 0 ? (
        <p>No guests added yet. Please add some guests to your event!</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {guests.map((guest) => (
            <li
              key={guest.id}
              className={guest.confirmed ? 'confirmed' : 'unconfirmed'}
              style={{
                backgroundColor: guest.confirmed ? '#d1ffd6' : '#fff',  // Confirmed guests have a light green background
                padding: '12px',
                marginBottom: '10px',
                borderRadius: '8px',
                border: '1px solid #ccc',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                boxShadow: guest.confirmed ? '0 4px 8px rgba(0, 128, 0, 0.2)' : 'none', // Add shadow to confirmed guests
              }}
            >
              <div>
                {guest.isEditing ? (
                  <div>
                    <input
                      type="text"
                      defaultValue={guest.name}
                      id={`name-${guest.id}`}
                      placeholder="Enter name"
                    />
                    <input
                      type="email"
                      defaultValue={guest.email}
                      id={`email-${guest.id}`}
                      placeholder="Enter email"
                    />
                  </div>
                ) : (
                  <div>
                    <strong>{guest.name}</strong> ({guest.email})
                  </div>
                )}
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                {guest.isEditing ? (
                  <button
                    onClick={() => {
                      const name = document.getElementById(`name-${guest.id}`).value;
                      const email = document.getElementById(`email-${guest.id}`).value;
                      onUpdate(guest.id, name, email);
                    }}
                    style={{
                      padding: '6px 12px',
                      backgroundColor: '#198754',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => onEdit(guest.id)}
                    style={{
                      padding: '6px 12px',
                      backgroundColor: '#007bff',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                      cursor: 'pointer',
                    }}
                  >
                    Edit
                  </button>
                )}

                <button
                  onClick={() => onRemove(guest.id)}
                  style={{
                    padding: '6px 12px',
                    backgroundColor: '#6c757d',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Remove
                </button>

                <button
                  onClick={() => onConfirm(guest.id)}
                  style={{
                    padding: '6px 12px',
                    backgroundColor: guest.confirmed ? '#dc3545' : '#198754',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                  {guest.confirmed ? 'Unconfirm' : 'Confirm'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GuestList;
