import React from 'react';

const VehicleModelSelector = ({ vehicleType, value, onChange }) => {
  const vehicleModels = [
    { id: 1, name: 'Model 1', type: 1 },
    { id: 2, name: 'Model 2', type: 1 },
    { id: 3, name: 'Model 3', type: 2 },
    { id: 4, name: 'Model 4', type: 2 },
    { id: 5, name: 'Model 5', type: 3 },
    { id: 6, name: 'Model 6', type: 3 },
  ];

  const filteredModels = vehicleModels.filter(
    (model) => model.type === vehicleType
  );

  const handleInputChange = (modelId) => {
    onChange('vehicleModel', modelId);
  };

  return (
    <div style={{display:"flex",flexDirection:"column",padding:"20px",gap:"10px"}}>
      {filteredModels.map((model) => (
        <label key={model.id}>
          <input
            type="radio"
            value={model.id}
            checked={value === model.id}
            onChange={() => handleInputChange(model.id)}
          />
          {model.name}
        </label>
      ))}
    </div>
  );
};

export default VehicleModelSelector;