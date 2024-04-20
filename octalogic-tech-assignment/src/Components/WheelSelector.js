import React from 'react';

const WheelSelector = ({ value, onChange }) => {
  const handleInputChange = (e) => {
    onChange('numberOfWheels', e.target.value);
  };

  return (
    <div style={{display:"flex",flexDirection:"column",padding:"20px",gap:"10px"}}>
      <label>
        <input
          type="radio"
          value="2"
          checked={value === '2'}
          onChange={handleInputChange}
        />
        2 Wheels
      </label>
      <label>
        <input
          type="radio"
          value="4"
          checked={value === '4'}
          onChange={handleInputChange}
        />
        4 Wheels
      </label>
    </div>
  );
};

export default WheelSelector;