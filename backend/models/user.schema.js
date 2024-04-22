const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/dbConfig");

const userSchema = sequelize.define('user',{
    firstName: {type : DataTypes.STRING, allowNull : false},
    lastName: {type : DataTypes.STRING, allowNull : false},
    wheels: {type : DataTypes.STRING, allowNull : false},
    typeOfVehicle: {type : DataTypes.STRING, allowNull : false},
    model: {type : DataTypes.STRING, allowNull : false},
    startDate:{type : DataTypes.DATE, allowNull : false},
    endDate: {type : DataTypes.DATE, allowNull : false},
    bookingId: { 
        type : DataTypes.INTEGER, 
        references: {
            model: "vehicles",
            key: "id",
        }
     },
},{
    timestamps : false
})

module.exports = {
    userSchema
}
