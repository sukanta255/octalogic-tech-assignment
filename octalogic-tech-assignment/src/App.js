import React, { useState } from 'react';
import NameInput from './Components/NameInput';
import WheelSelector from './Components/WheelSelector';
import VehicleTypeSelector from './Components/VehicleTypeSelector';
import VehicleModelSelector from './Components/VehicleModelSelector';
import DateRangePicker from './Components/DateRangePicker';
import { submitBooking } from './api';

import { Container, Button } from '@mui/material';


const App = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    numberOfWheels: '',
    vehicleType: '',
    vehicleModel: '',
    startDate: null,
    endDate: null,
  });
  const [step, setStep] = useState(1);
  console.log("...........",formData)
  const handleChange = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    if (step === 1 && (!formData.firstName || !formData.lastName)) {
      alert('Please fill up first name and last name');
      return;
    }
    if (step === 2 && !formData.numberOfWheels) {
      alert('Please select the number of wheels');
      return;
    }
    if (step === 3 && !formData.vehicleType) {
      alert('Please select the type of vehicle');
      return;
    }
    if (step === 4 && !formData.vehicleModel) {
      alert('Please select the specific vehicle model');
      return;
    }
    if (step === 5 && (!formData.startDate || !formData.endDate)) {
      alert('Please select the date range');
      return;
    }

    if (step < 5) {
      setStep(step + 1);
    } else {
      try {
        await submitBooking(formData);
        alert('Booking submitted successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          numberOfWheels: '',
          vehicleType: '',
          vehicleModel: '',
          startDate: null,
          endDate: null,
        });
        setStep(1);
      } catch (error) {
        alert('Failed to submit booking. Please try again.');
        console.error(error);
      }
    }
  };

  return (
    <Container maxWidth="sm" style={{ height: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      {step === 1 && (
        <NameInput
          firstName={formData.firstName}
          lastName={formData.lastName}
          onChange={(name, value) => handleChange(name, value)}
        />
      )}
      {step === 2 && (
        <WheelSelector
          value={formData.numberOfWheels}
          onChange={(name, value) => handleChange(name, value)}
        />
      )}
      {step === 3 && (
        <VehicleTypeSelector
          value={formData.vehicleType}
          onChange={(name, value) => handleChange(name, value)}
        />
      )}
      {step === 4 && (
        <VehicleModelSelector
          vehicleType={formData.vehicleType}
          value={formData.vehicleModel}
          onChange={(name, value) => handleChange(name, value)}
        />
      )}
      {step === 5 && (
        <DateRangePicker
          startDate={formData.startDate}
          endDate={formData.endDate}
          onChange={(start, end) => setFormData({...formData, startDate: start, endDate: end})}
        />
      )}
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        {step < 5 ? 'Next' : 'Submit'}
      </Button>
    </Container>
  );
};

export default App;