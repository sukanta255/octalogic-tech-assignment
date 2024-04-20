import React, { useState } from 'react';

const DateRangePicker = ({ startDate, endDate, onChange }) => {
  const [selectedStartDate, setSelectedStartDate] = useState(startDate);
  const [selectedEndDate, setSelectedEndDate] = useState(endDate);

  const handleStartDateChange = (e) => {
    const startDateValue = e.target.value;
    setSelectedStartDate(startDateValue);
    onChange(startDateValue, selectedEndDate);
  };

  const handleEndDateChange = (e) => {
    const endDateValue = e.target.value;
    setSelectedEndDate(endDateValue);
    onChange(selectedStartDate, endDateValue);
  };

  return (
    <div style={{display:"flex",flexDirection:"column",padding:"20px",gap:"5px"}}>
      <label style={{padding:"10px"}}>
        Start Date:
        <input
          style={{marginLeft:"10px"}}
          type="date"
          value={selectedStartDate}
          onChange={handleStartDateChange}
        />
      </label>
      <label style={{padding:"10px"}}>
        End Date:
        <input
        style={{marginLeft:"10px"}}
          type="date"
          value={selectedEndDate}
          onChange={handleEndDateChange}
        />
      </label>
    </div>
  );
};

export default DateRangePicker;