const { userSchema } = require("../models/user.schema");

const createUser= async(req,res) => {
    const { firstName,lastName,wheels,typeOfVehicle,model,startDate,endDate } = req.body;
    try{
        const isUserCreated = await userSchema.create({firstName,lastName,wheels,typeOfVehicle,model,startDate,endDate })
        res.status(201).send(isUserCreated );
    }catch(error){
        res.status(500).send({error : true, message: error.message });
    }
}

const getAllUsers = async (req,res)=> {
    try{
        const allUsers = await userSchema.findAll();
        res.status(201).send(allUsers);
    }catch(error){
        res.status(500).send({error : true, message: error.message });
    }
}

module.exports = {
    createUser,
    getAllUsers
}