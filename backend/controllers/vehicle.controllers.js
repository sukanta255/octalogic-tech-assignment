const { vehicles } = require("../models/vehicle.schema");


const createVehicle = async(req,res)=>{
    const { wheels,typeOfVehicle,model,status } = req.body;
    try{
        const isVehicleCreated = await vehicles.create({ wheels,typeOfVehicle,model,status })
        res.status(201).send(isVehicleCreated );
    }catch(error){
        res.status(500).send({error : true, message: error.message });
    }
}
const updateVehicle = async(req,res)=>{
    const { status } = req.body;
    const { id } = req.params;
    try{
        const isVehicleUpdated= await vehicles.update({ status }, { where: {id} })
        res.status(201).send(isVehicleUpdated );
    }catch(error){
        res.status(500).send({error : true, message: error.message });
    }
}

const getAllVehicle = async(req,res)=>{
    try{
        const allVehicles = await vehicles.findAll();
        res.status(201).send(allVehicles);
    }catch(error){
        res.status(500).send({error : true, message: error.message });
    }
}

const getVehicleById = async(req,res)=>{
    const { status } = req.body;
    const { id } = req.params;
    try {
        const vehicle = await vehicles.findById(id);
        if (!vehicle) {
            return res.status(404).send('Vehicle not found');
        }
        res.send(vehicle);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
}

const getVehicleTypes= async(req,res)=>{
    const { types } = req.params;
    try {
        const vehicleTypes = await vehicles.findAll({
            where: {
              typeOfVehicle: types
            }
          });
          
        res.json(vehicleTypes);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

const getVehicleWheels = async(req,res)=>{
    const { wheels } = req.params;

    try {
        const vehiclesModel = await vehicles.findAll({
            where: {
              wheels: parseInt(wheels)
            }
          });
          
        res.json(vehiclesModel);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server Error' });
    }
}

module.exports = {
    createVehicle,
    updateVehicle,
    getVehicleById,
    getAllVehicle,
    getVehicleTypes,
    getVehicleWheels
}