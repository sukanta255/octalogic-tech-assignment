const { vehicles } = require("../models/vehicle.schema");


const createVehicle = async(req,res)=>{
    const { wheels,typeOfVehicle,model,status } = req.body;
    try{
        const isVehicleCreated = await vehicles.create({ wheels,typeOfVehicle,model,status })
        res.status(201).send({ error : false, items : isVehicleCreated });
    }catch(error){
        res.status(500).send({error : true, message: error.message });
    }
}
const updateVehicle = async(req,res)=>{
    const { status } = req.body;
    const { id } = req.params;
    try{
        const isVehicleUpdated= await vehicles.update({ status }, { where: {id} })
        res.status(201).send({ error : false, items : isVehicleUpdated });
    }catch(error){
        res.status(500).send({error : true, message: error.message });
    }
}

const getAllVehicle = async(req,res)=>{
    try{
        const allVehicles = await vehicles.findAll();
        res.status(201).send({ error : false, items : allVehicles });
    }catch(error){
        res.status(500).send({error : true, message: error.message });
    }
}

module.exports = {
    createVehicle,
    updateVehicle,
    getAllVehicle
}