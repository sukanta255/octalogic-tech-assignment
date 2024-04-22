
import React from 'react';
import "./Styles/nameinput.css";

function NameInput({ firstName, lastName, handleFirstNameChange,handleLastNameChange }){

  return (
    <div className="name-input">
      <p className="firstname">First, What's your name?</p>
      <div className="name-field">
        <label>
          First Name
          <input
            name="firstName"
            type="text"
            id="firstName"
            required
            onChange={handleFirstNameChange}
            value={firstName}
          />
        </label>
        <label>
          Last Name
          <input
            name="lastName"
            type="text"
            id="lastName"
            required
            onChange={handleLastNameChange}
            value={lastName}
          />
        </label>
      </div>
    </div>
  );
};

export default NameInput;

