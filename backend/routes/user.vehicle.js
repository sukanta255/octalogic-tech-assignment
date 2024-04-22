const express = require('express');
const { vehicles } = require('../models/vehicle.schema');
const { getAllVehicle, createVehicle, updateVehicle, getVehicleWheels, getVehicleTypes, getVehicleById } = require('../controllers/vehicle.controllers');

const vehicleRouter= express.Router();

vehicleRouter.get("/", getAllVehicle)
vehicleRouter.get("/:id", getVehicleById)
vehicleRouter.get("/wheels/:wheels", getVehicleWheels)
vehicleRouter.get("/types/:types", getVehicleTypes)

vehicleRouter.post("/create", createVehicle)

vehicleRouter.patch("/update/:id", updateVehicle)

module.exports = {
    vehicleRouter
}