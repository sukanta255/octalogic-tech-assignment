
import React, { useState,useEffect } from 'react';
import WheelSelector from './WheelSelector';
import VehicleTypeSelector from './VehicleTypeSelector';
import VehicleModelSelector from './VehicleModelSelector';
import NameInput from './NameInput';
import DateRangePicker from './DateRangePicker';
import { Link } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BookingUser() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [wheels, setWheels] = useState('');
    const [typeOfVehicle, setTypeOfVehicle] = useState('');
    const [vehicleTypes, setVehicleTypes] = useState([]);
    const [model, setModel] = useState('');
    const [vehicleModels, setVehicleModels] = useState([]);
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [step, setStep] = useState(1);

    
  const fetchVehicleTypes = async (wheels) => {
    // const response = await fetch(`https://sukanta-octalogic-backen.onrender.com/vehicles/${wheels}`);
    const response = await fetch(`http://localhost:8080/vehicles/wheels/${wheels}`);
    const data = await response.json();
    console.log(data)
    const uniqueTypes = [...new Set(data.map(vehicle => vehicle.typeOfVehicle))];
    
    const uniqueData = uniqueTypes.map(type => ({
      type,
    }));

    setVehicleTypes(uniqueData);
  }

  const fetchVehicleModels = async (typeOfVehicle) => {
    // const response = await fetch(`https://sukanta-octalogic-backen.onrender.com/vehicles/${typeOfVehicle}`);
    const response = await fetch(`http://localhost:8080/vehicles/types/${typeOfVehicle}`);
    
    const data = await response.json();
    setVehicleModels(data);
    

  };

  // console.log("vehicleTypes",vehicleTypes)
  // console.log("vehicleModels",vehicleModels)

  console.log("typeOfVehicle----",typeOfVehicle)
  console.log("wheels-------",wheels)

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleVehicleTypeChange = (e) => {
    setTypeOfVehicle(e.target.value);
  };

  const handleVehicleModelChange = (e) => {
    setModel(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleChangePopUp = () => {
    if (step === 1 && (!firstName || !lastName)) {
      toast.error('Please enter your first name and last name');
      return;
    }
  
    if (step === 2 && !wheels) {
      toast.error('Please select the number of wheels');
      return;
    }
  
    if (step === 3 && !typeOfVehicle) {
      toast.error('Please select a vehicle type');
      return;
    }  
    if (step === 4 && !model) {
      toast.error('Please select a vehicle model');
      return;
    } 
    if (step === 5 && (!startDate || !endDate)) {
      toast.error('Please select Startdate and Date');
      return;
    }
    setStep(step + 1);
  };
  // const handleChangePopUpSuccess =()=>{
  //   if (step === 5 && (startDate || endDate)) {
  //     toast.success("You have Successfully Booked This Vehicles");
  //     return;
  //   }  
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const response = await fetch('https://sukanta-octalogic-backen.onrender.com/users/create', {     
    const response = await fetch('http://localhost:8080/users/create/', {   
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName,lastName,wheels,typeOfVehicle,model,startDate,endDate
      })
      
    });
    console.log(response);
    const data = await response.json();
    if (response.ok) {
      alert(data.message);
    } else {
      console.error(data);
      alert('An error occurred');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <NameInput
          firstName={firstName}
          lastName={lastName}
          handleFirstNameChange={handleFirstNameChange}
          handleLastNameChange={handleLastNameChange}
        />;
      case 2:
        return <WheelSelector
          wheels={wheels}
          fetchVehicleTypes={fetchVehicleTypes}
          setWheels={setWheels}
        />;
      case 3:
        return <VehicleTypeSelector
          typeOfVehicle={typeOfVehicle}
          setTypeOfVehicle={setTypeOfVehicle}
          vehicleTypes={vehicleTypes}
          handleVehicleTypeChange={handleVehicleTypeChange}
          fetchVehicleModels={fetchVehicleModels}
        />;
      case 4:
        return <VehicleModelSelector
          model={model}
          vehicleModels={vehicleModels}
          handleVehicleModelChange={handleVehicleModelChange}
        />;
      case 5:
        return <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          handleStartDateChange={handleStartDateChange}
          handleEndDateChange={handleEndDateChange}
        />
      default:
        return null;
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      {renderStep()}
      <div style={{ width: '30%', display: 'flex', justifyContent: 'space-between'}}>
        {step !== 5 && <button type="button" onClick={handleChangePopUp}>Next</button>}
        {step === 5 && <button type="submit" >Submit</button>}
      </div>

      {step === 5 && <Link to="/users" style={{ textDecoration: 'none'}}>
        <button type="button" style={{ backgroundColor: 'green', color: 'white' }}>Show Bookings User</button>
      </Link>}
    </form>    
  );
}

export default BookingUser;

