import React from 'react';
import "./Styles/vehicletypeselector.css";

function VehicleTypeSelector({ typeOfVehicle, vehicleTypes=[],setTypeOfVehicle,fetchVehicleModels }) {
  const handleVehicleTypeChange = (selectedWheels) => {
    typeOfVehicle=selectedWheels;
    setTypeOfVehicle(typeOfVehicle);
    fetchVehicleModels(typeOfVehicle);
  };

  return (
    <div style={{display:"flex",flexDirection:"column",padding:"20px",gap:"10px"}}>
      <p className="firstname">Select Vehicle Type</p>
      {vehicleTypes?.map((type) => (
        <label key={type.id} style={{fontSize:"24px"}}>
          <input
            type="radio"
            name="type"
            value={type.type}
            onChange={()=>handleVehicleTypeChange(type.type)}
          />
          {type.type}
        </label>
      ))}
      
    </div>
  );
};

export default VehicleTypeSelector;