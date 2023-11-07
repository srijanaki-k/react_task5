import React, { useState } from 'react';
import './AgeCalculator.css'; // Import a CSS file for styling

function AgeCalculator() {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const currentDate = new Date();
    const birthDate = new Date(dob);
    const ageDiff = currentDate - birthDate;
    const calculatedAge = Math.floor(ageDiff / (1000 * 60 * 60 * 24 * 365.25));
    setAge(calculatedAge);
  };

  return (
    <div className="age-calculator-container">
      <h2 className="calculator-header">Age Calculator</h2>
      <label htmlFor="dob">Enter your date of birth:</label>
      <input
        type="date"
        id="dob"
        value={dob}
        onChange={(e) => setDob(e.target.value)}
      />
      <button onClick={calculateAge} className="calculate-button">
        Calculate Age
      </button>
      {age !== null && <p>You are {age} years old</p>}
    </div>
  );
}

export default AgeCalculator;
