const { userSchema } = require("../models/user.schema");

const createUser= async(req,res) => {
    try {
        const { firstName,lastName,wheels,typeOfVehicle,model,startDate,endDate } = req.body;
        const attendUser = await userSchema.findOne({
            where: {
              firstName: firstName,
              lastName: lastName,
              model: model
            }
          });
        console.log(attendUser);
        if(attendUser ?.firstName && attendUser ?.lastName && attendUser ?.model){
            res.json({ message: "User already booked this vehicle" });
        }

        else{
            const UserBooking = new userSchema({
                firstName,
                lastName,
                wheels,
                typeOfVehicle,
                model,
                startDate,
                endDate
            });
            await UserBooking.save();
            res.json({ message: 'Booking created successfully' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
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

const deleteUser = async(req,res)=>{
    const { id } = req.params;

    try {
        const deleteUserId = await userSchema.findByPk(id);

        if (!deleteUserId) {
            return res.status(404).send('User not found');
        }

        await deleteUserId.destroy();
        res.send('Booking User deleted successfully');
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal server error');
    }
}

module.exports = {
    createUser,
    getAllUsers,
    deleteUser
}