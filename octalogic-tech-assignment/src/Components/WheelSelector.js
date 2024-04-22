import React from 'react';

function WheelSelector({ wheels, fetchVehicle,setWheels}){
  const handleWheelsInputChange = (selectedWheels) => {
    wheels = selectedWheels;
    setWheels(selectedWheels)
    fetchVehicle(wheels)
  };

  return (
    <div className='name-input'>
      <div style={{display:"flex",flexDirection:"column",padding:"20px",gap:"10px"}}>
      <p className="firstname">Please Select Wheels</p>
      <label style={{fontSize:"24px"}}>
        <input
          type="radio"
          name = "wheels"
          value="2"
          
          onChange={handleWheelsInputChange('2')}
        />
        2 Wheels
      </label>
      <label style={{fontSize:"24px"}}>
        <input
          type="radio"
          name="wheels"
          value="4"
          onChange={handleWheelsInputChange('4')}
        />
        4 Wheels
      </label>
    </div>
    </div>

    
  );
};

export default WheelSelector;