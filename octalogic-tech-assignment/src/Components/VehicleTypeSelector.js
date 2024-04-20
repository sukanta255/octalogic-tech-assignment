import React from 'react';

const VehicleTypeSelector = ({ value, onChange }) => {
  const handleInputChange = (e) => {
    onChange('vehicleType', parseInt(e.target.value));
  };

  const vehicleTypes = [
    { id: 1, name: 'Hatchback' },
    { id: 2, name: 'SUV' },
    { id: 3, name: 'Sedan' },
  ];

  return (
    <div style={{display:"flex",flexDirection:"column",padding:"20px",gap:"10px"}}>
      {vehicleTypes.map((type) => (
        <label key={type.id}>
          <input
            type="radio"
            value={type.id}
            checked={value === type.id}
            onChange={handleInputChange}
          />
          {type.name}
        </label>
      ))}
    </div>
  );
};

export default VehicleTypeSelector;