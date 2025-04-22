import React from 'react';
import './RSVPSummary.css'; 

const RSVPSummary = ({ guests }) => {
  const total = guests.length;
  const confirmed = guests.filter(g => g.confirmed).length;
  const unconfirmed = total - confirmed;

  return (
    <div className="summary-box">
      <h2>RSVP Summary</h2>
      <ul>
        <li>Total Guests: <strong>{total}</strong></li>
        <li className="confirmed">Confirmed: <strong>{confirmed}</strong></li>
        <li className="unconfirmed">Unconfirmed: <strong>{unconfirmed}</strong></li>
      </ul>
    </div>
  );
};

export default RSVPSummary;
