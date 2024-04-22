const express = require('express');
const { getAllUsers, createUser, deleteUser } = require('../controllers/user.controllers');

const userRouter = express.Router();

userRouter.get("/", getAllUsers)

userRouter.post("/create",createUser)
userRouter.delete("/delete/:id",deleteUser)

module.exports = {
    userRouter
}