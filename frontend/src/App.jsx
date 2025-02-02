import React, { useState } from 'react';

export default function App() {
  const [formData, setFormData] = useState({
    confirmation: '',
    firstName: '',
    lastName: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://backend:5000/checkin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const result = await response.json();
      alert(result.output || result.message);
    } catch (error) {
      alert('Check-in failed: ' + error.message);
    }
  };

  return (
    <div className="container">
      <h1>Southwest Auto Check-In</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Confirmation Number"
          value={formData.confirmation}
          onChange={(e) => setFormData({...formData, confirmation: e.target.value})}
          required
        />
        <input
          type="text"
          placeholder="First Name"
          value={formData.firstName}
          onChange={(e) => setFormData({...formData, firstName: e.target.value})}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) => setFormData({...formData, lastName: e.target.value})}
          required
        />
        <button type="submit">Check In Now</button>
      </form>
    </div>
  );
}
