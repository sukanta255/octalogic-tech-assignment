import React from 'react';
import './Styles/vehiclemodelselector.css';

function VehicleModelSelector({ vehicleModels=[], handleVehicleModelChange }) {

  return (
    <div style={{display:"flex",flexDirection:"column",padding:"20px",gap:"10px"}}>
      <p className="firstname">Select Vehicle Model</p>
      {vehicleModels?.map((model) => (
        <label key={model.id} style={{fontSize:"24px"}}>
          <input
            type="radio"
            name ="model"
            value={model.model}
            onChange={handleVehicleModelChange}
          />
          {model.model}
        </label>
      ))}
    </div>
  );
};

export default VehicleModelSelector;