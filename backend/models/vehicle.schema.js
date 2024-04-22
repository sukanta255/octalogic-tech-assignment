const { DataTypes } = require('sequelize');
const { sequelize } = require("../config/dbConfig");

const vehicles = sequelize.define('vehicles',{
    wheels: {type : DataTypes.STRING, allowNull : false},
    typeOfVehicle: {type : DataTypes.STRING, allowNull : false},
    model: {type : DataTypes.STRING, allowNull : false},
    status:{type : DataTypes.STRING, allowNull : false},
},{
    timestamps : false
})

module.exports = {
    vehicles
}