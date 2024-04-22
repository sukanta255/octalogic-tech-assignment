import React, { useState } from 'react';
import "./Styles/daterangepicker.css";

function DateRangePicker({ startDate, endDate, handleStartDateChange,handleEndDateChange }){

  return (
    <div className='name-input'>
      <p className="firstname">Please Booking Date</p>
      <label style={{padding:"15px",fontSize:"20px"}}>
        Start Date:
        <input
          type="date"
          name = "startDate"
          style={{marginLeft:"15px"}}
          value={startDate}
          onChange={handleStartDateChange}
        />
      </label>
      <label style={{padding:"15px",fontSize:"20px"}}>
        End Date:
        <input
          type="date"
          name="endDate"
          style={{marginLeft:"15px"}}
          value={endDate}
          onChange={handleEndDateChange}
        />
      </label>
    </div>
  );
};

export default DateRangePicker;