import "../style.css";
import React from 'react';
import TextField from '@mui/material/TextField';

const NameInput = ({ firstName, lastName, onChange }) => {
  const handleFirstNameChange = (e) => {
    onChange('firstName', e.target.value);
  };

  const handleLastNameChange = (e) => {
    onChange('lastName', e.target.value);
  };

  return (
    <div>
      <p>First, What's your name?</p>
      <div style={{ display: "flex", flexDirection: "column", gap: "20px", padding: "20px" }}>
        <div style={{ display: "flex", flexDirection: "column",fontWeight:600,color:"black"}}>
          <label htmlFor="firstName">First Name</label>
          <TextField
            id="firstName"
            variant="outlined"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column",fontWeight:600,color:"black"}}>
          <label htmlFor="lastName">Last Name</label>
          <TextField
            id="lastName"
            variant="outlined"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
      </div>
    </div>
  );
};

export default NameInput;

