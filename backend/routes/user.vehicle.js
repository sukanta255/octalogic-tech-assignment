const express = require('express');
const { vehicles } = require('../models/vehicle.schema');
const { getAllVehicle, createVehicle, updateVehicle } = require('../controllers/vehicle.controllers');

const vehicleRouter= express.Router();

vehicleRouter.get("/", getAllVehicle)

vehicleRouter.post("/create", createVehicle)

vehicleRouter.patch("/update/:id", updateVehicle)

module.exports = {
    vehicleRouter
}